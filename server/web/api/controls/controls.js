var crud = require('../models/crud');

let localDateString = require('./src');
console.log('-----> api/controls/controls');

module.exports = {
  sqlParams: function(route, req) {
    // here we are sure that request user rol is defined in route models. Here we check if request method is defined in route models and what kind of data to return
    // own OR all
    console.log('-----> api/controls/controls:sqlArray');
    let user = req.user ? req.user[0] : {
      username: 'anonymous@anon.ro',
      role: 'anonymous'
    };
    let join = route.hasOwnProperty('join') ? route.join : false;
    let join_columns = route.hasOwnProperty('join_columns') ? route.join_columns : false;
    let acl = route.acl[user.role];
    let methodAcl = false; // check if route models  has req method 
    // In this variable keep the columns as array and the value as array . use this to construct the sql string
    let sqlParams = {
      sqlColumns: [],
      sqlValues: [],
      sqlId: "",
      table: route.table,
      join_columns: join_columns,
      join: join,
      user: user,
      sort: [],
      limit: null
    }
    let defaultColumns = ['user', 'created', 'modifier', 'modified']
    // -------------check all the parameters from req
    // first , check request.body where keys are columns and values are values
    if (Object.keys(req.body).length !== 0) {
      console.log('-----> api/controls/controls:req.body--', req.body);
      Object.keys(req.body).forEach(function(key, index) {
        if (defaultColumns.includes(key)) {
          delete req.body[key];
        } else {
          sqlParams.sqlColumns.push(key);
        }

      })
      Object.values(req.body).forEach(function(value, index) {
        sqlParams.sqlValues.push(value);
      })

    }
    // ----------check request.params
    if (Object.keys(req.params).length !== 0 && Object.keys(req.body).length == 0) {
      console.log('-----> api/controls/controls:req.params--', req.params);
      Object.keys(req.params).forEach(function(key, index) {
        if (defaultColumns.includes(key)) {
          delete req.params[key];
        } else {
          sqlParams.sqlColumns.push(key);
        }

      })
      Object.values(req.params).forEach(function(value, index) {
        sqlParams.sqlValues.push(value);
      })
    }

    if (Object.keys(req.params).length !== 0) {
      console.log('-----> api/controls/controls:req.params:ID--', req.params);
      sqlParams.sqlId = req.params;
    }

    // -------------------check request.query
    if (Object.keys(req.query).length !== 0) {
      Object.keys(req.query).forEach(function(key, index) {
        //-- remove defaul columns if exist and resolve sort option
        if (defaultColumns.includes(key) || key.includes('sort')) {
          //remove spaces and return (column) 
          let keyNonSpaces = key.replace(/ /g, '').match(/\((.*?)\)/g); 
          // remove '-' if exist
          let column = keyNonSpaces[0].includes('-') ? keyNonSpaces[0].replace(/-/g, '') : keyNonSpaces[0];
          // remove () to get the exact column name
          column = column.substring(1,column.length - 1);
          // if '-' exist set value to -1 else 1
          let value = keyNonSpaces[0].includes('-') ? -1 : 1;
          let obj = {
            column: column,
            value: value
          };
          sqlParams.sort.push(obj);
          console.log('----> controlsrequest.query:sort:obj este:: ', obj);
          delete req.query[key];
        } else {
          sqlParams.sqlColumns.push(key);
        }

      })
      Object.values(req.query).forEach(function(value, index) {
        sqlParams.sqlValues.push(value);
      })
      console.log('-----> api/controls/controls:query:sqlParams--', req.query);
    }

    console.log('-----> api/controls/controls:sqlParams--', sqlParams);
    // create arrays for sql string based on user right and set user , modfier, modified etc
    acl.forEach(function(type, index) {

      // check if request method is defined in route models and check what to return : all data or own data
      if (req.method.toLowerCase() === type.split(":")[0]) {

        if (req.method.toLowerCase() === 'get' && type.split(":")[1] === 'own') {
          sqlParams.sqlColumns.push('user');
          sqlParams.sqlValues.push(user.username);
          sqlParams.sort = (req.sort) ? 'sort' : 0;
          sqlParams.limit = (req.limit) ? 'sort' : 0;
        }

        if (req.method.toLowerCase() === 'post') {
          sqlParams.sqlColumns.push('user', 'created', 'modifier', 'modified');
          sqlParams.sqlValues.push(user.username, localDateString.getLocalDate(), user.username, localDateString.getLocalDate());
          //           it works but with the servet time 
          //           sqlParams.sqlValues.push("'" + req.user.name + "'", "NOW()", "'" + req.user.name + "'", "NOW()");
        }

        if (req.method.toLowerCase() === 'put') {
          sqlParams.sqlColumns.push('modifier', 'modified');
          sqlParams.sqlValues.push(user.username ,  localDateString.getLocalDate() );
        }
        methodAcl = true;
      }
    });
    return sqlParams;
  },



  // **********  check rights for current route  
  userRights: function(route, req) {
    console.log('-----> api/controls/controls:userRights');
    let user = req.user ? req.user[0] : {
      usename: 'anonymous@anon.ro',
      role: 'anonymous'
    };
    // Test if user.role is defined in rotes model and if exist , test if it has rights on the route type GET/POST etc
    if (route.acl.hasOwnProperty(user.role)) {
      let userRouteTypeAllow = false;
      route.acl[user.role].forEach(function(type, index) {
        if (req.method.toLowerCase() === type.split(":")[0]) {
          user.userRouteTypeAllow = true;
          // userProprety = [own, all, group, etc]
          user.userProprety = type.split(":")[1];
        }
      })
    } else {
      user.userRouteTypeAllow = false;
      user.userProprety = null;
    }
    console.log('-----> api/controls/controls:userRights:user', user);
    return user;
  },

  //*******************************
  crud: function(route, type) {
    console.log('-----> api/controls/controls:crud');
    let crudModel = crud.base[type];
    if (crud.hasOwnProperty(route.name)) {

      if (crud[route.name].hasOwnProperty(type)) {
        crudModel = crud[route.name][type];
      }
    }
    return crudModel;
  }
};