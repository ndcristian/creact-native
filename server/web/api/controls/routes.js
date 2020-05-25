var express = require('express');
var router = express.Router();
var routes = require('../models/routes');
var controls = require('./controls');
//  var crud = require('../models/crud');
var cors = require('cors');
console.log('-----> api/controls/routes');

routes.forEach(function(route, index) {

  router.get('/' + route.name, cors(), function(req, res) {
    let sqlParams = controls.sqlParams(route, req);
    let userData = controls.userRights(route, req);
    let crud = controls.crud(route, 'get');
    console.log('parameters in route:->' + route.name + '/get->', sqlParams, userData, crud)
    if (userData.userRouteTypeAllow) {
      crud(sqlParams, userData, function(err, data) {
        console.log('returned DATA from SQL', data);
        console.log('returned DATA from SQL', err);

        if (route.template === 'json') {
          if (!data) {
            data = [];
          }
          res.send(JSON.stringify(data));

        } else {

          res.render(route.template, {
            locals: res.locals,
            data: data
          });
        }
      });
    }
  });


  router.get('/' + route.name + '/:id', function(req, res) {
    let sqlParams = controls.sqlParams(route, req);
    let userData = controls.userRights(route, req);
    let crud = controls.crud(route, 'get');
    console.log('parameters in route:->' + route.name + '/get:id->', sqlParams, userData, crud)
    if (userData.userRouteTypeAllow) {
      crud(sqlParams, userData, function(err, data) {
        console.log('returned DATA from SQL', data, err);

        if (route.template === 'json') {
          if (!data) {
            data = [];
          }
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(data));

        } else {

          res.render(route.template, {
            locals: res.locals,
            data: data
          });
        }
      });
    }
  });


  router.post('/' + route.name, function(req, res) {
    let sqlParams = controls.sqlParams(route, req);
    let userData = controls.userRights(route, req);
    let crud = controls.crud(route, 'post'); // return a function from crud models
    console.log('-----> parameters in route:->' + route.name + '/post->', sqlParams, userData, crud)
    if (userData.userRouteTypeAllow) {
      crud(sqlParams, userData, function(err,data) {
       console.log('----->returned ERR from SQL:POST', err);
        console.log('----->returned DATA from SQL:POST', data);
        res.setHeader('Content-Type', 'application/json');
        res.status(201);
        res.send(JSON.stringify(data));

      });
    }
  });



  router.put('/' + route.name + '/:id', function(req, res) {
    let sqlParams = controls.sqlParams(route, req);
    let userData = controls.userRights(route, req);
    let crud = controls.crud(route, 'put');
    console.log('parameters in route:->' + route.name + '/put->', sqlParams, userData, crud)
    if (userData.userRouteTypeAllow) {
      crud(sqlParams, userData, function(err,data) {
       
        console.log('---->returned DATA from SQL:PUT', data, err);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));

      });
    }
  });



  router.delete('/' + route.name + '/:id', function(req, res) {
    let sqlParams = controls.sqlParams(route, req);
    let userData = controls.userRights(route, req);
    let crud = controls.crud(route, 'delete');
    console.log('parameters in route:->' + route.name + '/DELETE->', sqlParams, userData, crud)
    if (userData.userRouteTypeAllow) {
      crud(sqlParams, userData, function(data) {

        if (!data) {
          console.log('$$$$--->No Data');
        }
        console.log('---->returned DATA from SQL:DELETE', data);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));

      });
    }
  });


});


//

function ensureAuthenticated(req, res, next) {
  console.log('route.rol::', route.rol);
  if (req.isAuthenticated()) {
    console.log('route.rol::', route.rol);
    return next();
  } else {
    if (routeRol === 'all') {
      return next();
    }
    //req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}
module.exports = router;