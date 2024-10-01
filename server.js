//import dependancies
const express = require('express');
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv');

//configure environment variables
dotenv.config();


// connecting the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})
 
//testing the connection
db.connect((err) => {
    if(err){
       return console.log ('error connecting to te database:', err )
    }
    console.log('successfully connected to mysql:', db.threadId)
})

// QUESTION 1
/*app.get('', (req, res) => {
    const getPatients = "SELECT * FROM patients"
    db.query(getPatients, (err, data) => {
        if(err) {
            return res.status(400).send ("failed to connect", err)

        }
res.status(200). send(data)
    })
})*/

//QUESTION 2
/*app.get('', (req, res) => {
    const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers"
    db.query(getProviders, (err, data) => {
        if(err) {
            return res.status(400).send ("failed to connect", err)

        }
res.status(200). send(data)
    })
})*/

// QUESTION 3
/*app.get('', (req, res) => {
    const getfirstname = "SELECT first_name FROM patients"
    db.query(getfirstname, (err, data) => {
        if(err) {
            return res.status(400).send ("failed to connect", err)

        }
res.status(200). send(data)
    })
})*/

//QUESTION 4
app.get('', (req, res) => {
    const getProviders = "SELECT provider_id,provider_specialty FROM providers"
    db.query(getProviders, (err, data) => {
        if(err) {
            return res.status(400).send ("failed to connect", err)

        }
res.status(200). send(data)
    })
})



//start amd listen to the server
app.listen(3300, () => {
    console.log ('server is running successfully on port 3300...')
})