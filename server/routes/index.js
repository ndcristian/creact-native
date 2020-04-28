var express = require('express');
var router = express.Router();
var crud = require('../web/api/models/crud');


//Get home page
router.get('/', function(req, res) {
  //crud.logs();
  res.set('Content-Type', 'text/html');
  res.send(res.send(JSON.stringify({status:"index ok"})));

});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}


module.exports = router;