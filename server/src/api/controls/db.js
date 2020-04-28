// This module get tables and tables structure from database
var fs = require('fs');
var mysql = require('mysql');
var dbName = require("../../../config/appconfig").database;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'monitor',
  password: 'monitor1209',
  database: dbName
});
//u:root p: monitor@1209
connection.connect();
console.log('dbName', dbName)
//module.exports.connection = connection;
//module.exports.db_struct = function(callback) {
let structure = {};
connection.query('SHOW TABLES  FROM ' + dbName, function(err, tables, fields) {
  // console.log('tables : ',err,  tables, dbName)
  tables.forEach(function(item, key, value) {
    var table = item[Object.keys(item)]; // store table names from database
    //console.log('DB structure is ', table);
    connection.query('SHOW COLUMNS FROM ' + table, function(err, rows, fields) {
      //console.log('table structure in ' + table + ':::', rows[0].Field, rows[1].Field, rows[2].Field);

      rows.forEach(function(err, notUsed, value) {

        let columns = [];
        //console.log('coloanele sunt:', columns, value[2].Field);
        for (var property in value) { //get columns name from each table and store to array columns
          //  console.log(table + 'structura:', value[property].Field);
          columns.push(value[property].Field);
        }
        structure[table] = columns;
      });
      // console.log (structure);
      //callback(structure) ;
      var data = JSON.stringify(structure);
      fs.writeFile('../models/db.json', data, 'utf8', function() {});
      //fs.writeFile('../models/db.json', data); 
    });
  })

});

//}