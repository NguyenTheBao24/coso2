const express = require('express');
var mysql = require('mysql');
const app = express();
const post = 3000;

app.get('/mysql', (req, res) => {
    var con = mysql.createConnection({
        host: "20.198.241.242",
        user: "root",
        password: "12344321"
    });
    con.connect(function (err) {
        if (err) {
            res.send('Connection error: ' + err);
            return;
        }

        con.query("SHOW DATABASES;", function (err, result) {
            if (err) throw err;
            res.send(result);
            console.log(result)
        });
    });
})
