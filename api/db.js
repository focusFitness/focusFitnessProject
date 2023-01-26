import mysql from "mysql2"



export const db = mysql.createConnection({
    host: "focus-fitness.cr4wf0n6ltdx.us-west-2.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "password",
    database: "focusFitness"
})

