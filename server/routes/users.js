var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var services = require('./services/services');
 var User = require('./user');
var project = require('../config/appconfig');

console.log('mesaj din users modul');

// Register
router.get('/register', function(req, res) {
 res.send(JSON.stringify({register:"register ok"}));
});



passport.use(new LocalStrategy(
  function(email, password, done) {
    User.getUserByUsername(email, function(err, user) {
      console.log('getuserPassport', user);
      if (err)
        throw err;
      if (!user) {
        return done(null, false, {
          message: 'invalid user or password'
        });
      }
      console.log('getuserPassportPassword', user[0].pwdhash);
      User.comparePassword(password, user[0].pwdhash, function(err, isMatch) {
        console.log('comparePassword', user);
        if (err)
          throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: 'invalid user or password'
          });
        }
      });
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/account', ensureAuthenticated, function(req, res) {
  //var hidden = true;
  delete req.user.password;
 res.send(JSON.stringify({status:"account ok"}));
});
router.post('/account', ensureAuthenticated, function(req, res) {
  var user = req.user;
  user.name = req.body.name;
  user.surname = req.body.surname;
  User.updateUser(user, req.url, function(err, usermodified) {
    if (err) {
      req.flash('error_msg', 'Your data was NOT updated!');
    } else {
      req.flash('success_msg', 'Your data was updated!');
      res.redirect('/users/account');
    }

  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    //req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}


module.exports = router;