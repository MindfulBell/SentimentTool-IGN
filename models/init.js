/**
 * Class used for connecting sequelize to the database
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'sagesql.cdsyctow5z1a.us-west-2.rds.amazonaws.com',
  user     : 'sage',
  password : 'ignsecure',
  database : 'feels_db'
});

module.exports.connection = connection;