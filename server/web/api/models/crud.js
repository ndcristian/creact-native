var mysql = require('mysql');
var dbName = require("../../../config/appconfig").database;
var queryStrings = require('../controls/sqlParser');

var connection = mysql.createConnection({
//   host: 'mysql',
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
connection.connect();
console.log("---------------> process.env.DB_HOST", process.env.DB_HOST);
console.log('-----> api/models/crud');

module.exports = {
  base: {
    get: function(sqlParams, userData, callback) {
      let queryString = queryStrings.get(sqlParams);
      connection.query(queryString, callback)
    },

    
    getId: function(sqlParams, userData, callback) {
      let queryString = 'SELECT * FROM ' + sqlParams.table + ' WHERE id=' + sqlParams.sqlId.id;
      console.log('-----> model/crud:getId:queryString', queryString);
      connection.query(queryString, callback)
    },

    
    post: function(sqlParams, userData, callback) {
      let queryString = queryStrings.post(sqlParams);
      console.log('-----> api/models/crud:POST:queryString', queryString)
      connection.query(queryString, callback);
    },


    put: function(sqlParams, userData, callback) {
      let queryString = queryStrings.put(sqlParams)
      console.log('-----> api/models/crud:PUT:SQL String:++', queryString);
      connection.query(queryString, callback);
    },
    
    
    delete: function(sqlParams, userData, callback) {
      let queryString = 'DELETE FROM ' + sqlParams.table + ' WHERE id=' + sqlParams.sqlId.id;
      console.log('-----> models/crud:delete:queryString++',queryString);
      connection.query(queryString, callback);
    }
  },
  
  
  
  
  environment: {
    get: function(sqlParams, userData, callback) {
      let queryString = "SELECT station_name as Station, DAYOFMONTH(modified) as  'Day', MONTH(modified) as  'Month', YEAR(modified) as  'Year',AVG(value)  AS 'TempMediu' FROM environment GROUP BY Station, DAYOFMONTH (modified), MONTH(modified) , YEAR(modified)";
      connection.query(queryString, callback)
    }
  },
  register: {
    post: function(sqlParams, userData, cb) {
      let queryString = "INSERT INTO " + sqlParams.table + " (" + sqlParams.sqlColumns + ") VALUES (" + sqlParams.sqlValues + ")";
      connection.query(queryString, cb);
    }
  },
  login: {
    get: function(identifier, callback) {
      console.log(identifier);
      let queryString = "SELECT id, username, pwdhash, role FROM _users WHERE username='" + identifier + "' OR id='" + identifier + "'";

      connection.query(queryString, callback)
    }
  }
  //   post: function(sqlParams, callback) {
  //     let queryString = "INSERT INTO " + sqlParams.table + " (" + sqlParams.sqlColumns + ") VALUES (" + sqlParams.sqlValues + ")"
  //     console.log('queryString', queryString);
  //     connection.query(queryString, function(a, b, c) {
  //       console.log(a, b, c)
  //     });
  //   },
  //   get: function(sqlParams, callback) {
  //     connection.query('SELECT * from environment', callback)
  //   },
  //   update: function() {},
  //   delete: function() {}
};