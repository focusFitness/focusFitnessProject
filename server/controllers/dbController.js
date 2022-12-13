const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database: "LoginSystem"
});

const dbController = {};

dbController.checkUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password= ?", [username, password], (err, result)=> {
        if(err){
        next({
            log: 'dbController.checkUser query failed',
            message: { err: err }
            })
        }
        if(result.length>0){
            res.locals.result = result;
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


    db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result)=> {
        if(err) {
            next({
                log: 'dbController.addUser query failed',
                message: { err: err }
            })
        } else next();
    })
}

module.exports = dbController;