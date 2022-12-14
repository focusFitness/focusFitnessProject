// const mysql = require('mysql');
const db = require("../model.js");

const dbController = {};

dbController.checkUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = $1 AND password= $2", [username, password], (err, result)=> {
        if(err){
        next({
            log: 'dbController.checkUser query failed',
            message: { err: err }
            })
        }
        if(result.rows.length > 0){
            res.locals.result = result.rows[0];
            next();
        }else{
            res.locals.result = {message: "Wrong username/password combination"};
            next();
        }
    });
};

dbController.addUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;


    db.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3);", [email, username, password], (err, result)=> {
        if(err) {
            next({
                log: 'dbController.addUser query failed',
                message: { err: err }
            })
        } else {
            next();
        }
    })
}

module.exports = dbController;