const config = require('../config.js')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost: 3306",
    user: 'root',
    password: config.password,
    database: 'Local Instance 3306'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();
