const mysql = require('mysql');
const { connections } = require('../config/db');

const jokeTable = (req, res, next) => {
    const sql = `
    CREATE TABLE IF NOT EXISTS jokes(
         id VARCHAR(255) NOT NULL PRIMARY KEY ,
        joke VARCHAR(450) NOT NULL,
    )
    `;

    connections.query(sql, [], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log("we have successfully created jokes table");
            next();
        }
    })
}

module.exports = {
    jokeTable
}