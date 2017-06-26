
var mysql = require('mysql');
var connection;

if(process.env.KJWEBCO_URL) {
    connection = mysql.createConnection(process.env.KJWEBCO_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'architect',
        database: 'burgers_db'
    });
}

module.exports = connection;
