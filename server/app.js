var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').config();
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
     
var appConf = require('./config/appconfig.js');

var routes = require('./routes/index');
var users = require('./routes/users');
var web = require('./web/api/controls/routes');
// Init App
var app = express();
            
//react
// app.set('views', __dirname + '/web/app/views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
//optional for react 
//var options = { beautify: true };
//app.engine('jsx', require('express-react-views').createEngine(options));
  
// View Engine
// app.set('views', path.join(__dirname, '/web/app/views'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
 
// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParm += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));
 
// Connect Flash
app.use(flash());

// Global Vars
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
  res.locals.user = req.user ? req.user[0] : null;
  res.locals.appConfig = appConf;
  console.log('din app LOCALS', res.locals);
  next();
  
});

//handle error
app.use(function(err, req, res, next) {
  console.log('Trecut prin ERROR', err)
  res.status(err.status || 500);
  //res.render('base/error');
  res.send('Error apears from app')
});


app.use('/', routes);
app.use('/users', users);
app.use('/api', web);

app.set('port', (process.env.PORT || 8080));
app.set('env',(process.env.NODE_ENV));
app.listen(app.get('port'), function() {
  console.log('Server started on port: ' + app.get('port'));
  console.log('Server environment: ' + app.get('env'));
   
});