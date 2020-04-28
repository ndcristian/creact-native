var bcrypt = require('bcryptjs');
var crud = require('../web/api/models/crud');
let localDateString = require('../src/api/controls/src');

//----------------------------------------------------
module.exports.createUser = function(newUser, cb) {

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      var sqlArray = {
        table: '_users',
        sqlColumns: ['username', 'pwdhash', 'role', 'full_name'],
        sqlValues: ["'"+newUser.username+"'", "'"+newUser.password+"'", "'"+newUser.role+"'", "'"+newUser.full_name+"'"]
      }
      sqlArray.sqlColumns.push('user', 'created', 'modifier', 'modified');
      sqlArray.sqlValues.push("'" + newUser.username + "'", "'" + localDateString.getLocalDate() + "'", "'" + newUser.username + "'", "'" + localDateString.getLocalDate() + "'");
      crud.register.post(sqlArray, cb);
    });
  });
};
//---------------------------------------------------
//----------------------------------------------------
module.exports.getUserByUsername = function(email, cb) {
  console.log("a trecut prin getUserByUserName");
  crud.login.get(email, cb);
};
//-----------------------------------------------------
module.exports.getUserById = function(id, cb) {
  console.log("a trecut prin getUserById");
  crud.login.get(id, cb);
};
//------------------------------------------------------
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  console.log("a trecut prin comparePassword", candidatePassword, hash);
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err)
      throw err;
    callback(null, isMatch);
  });
};