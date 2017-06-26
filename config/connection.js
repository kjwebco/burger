//MY sql password in a separate key file
var key = require('./keys.js');
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: key,
        database: 'burgers_db'
    });
}

module.exports = connection;
