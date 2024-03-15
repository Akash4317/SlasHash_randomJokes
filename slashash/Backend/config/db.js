const mysql = require('mysql');

const connections = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'akash9910',
    database: 'randomjokes'
})

module.exports = {
    connections
}