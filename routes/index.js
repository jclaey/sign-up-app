const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const indexPage = require('../views/index')
const successPage = require('../views/success')

router.get('/', (req, res) => {
  res.send(indexPage())
})

router.get('/success', (req, res) => {
  res.send(successPage())
})

router.post('/', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.ROOT_PASS,
    database: 'users_app'
  })
  
  connection.connect(function(err) {
    if (err) throw err
    console.log("Connected to MySQL database".magenta)
  })

  connection.query(`
    INSERT INTO users (email)
    VALUES (${connection.escape(req.body.email)})
  `, (err, result) => {
    if (err) throw err
    console.log(result)
    res.redirect('/success')
  })
})

module.exports = router