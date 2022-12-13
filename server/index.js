const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require("cors")


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'password',
    database: "LoginSystem"
})

app.post('/register', (req, res)=>{
    
    const username = req.body.username
    const password = req.body.password


    db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result)=> {
        console.log(err);
    })
})


app.post('/login', (req, res)=>{
    const username = req.body.username
    const password = req.body.password


    db.query("SELECT * FROM users WHERE username = ? AND password= ?", [username, password], (err, result)=> {
        if(err){
        res.send({err: err});
  }
    if(result.length>0){
        res.send(result)
    }else{
        res.send({message: "Wrong username/password combination"})
    }
  }
  )

})

app.listen(3002, () =>{
    console.log("Server is Running");
}) 