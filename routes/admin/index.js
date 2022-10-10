const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const adminLoginPage = require('../../views/admin/login')
const adminDashboardPage = require('../../views/admin/dashboard')

router.get('/login', (req, res) => {
  res.send(adminLoginPage())
})

router.post('/login', (req, res) => {
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

  connection.query(`SELECT email, password FROM admin WHERE email='${req.body.email}'`, (err, result) => {
    if (err) {
      throw err
    } else if (!result[0].email) {
      console.log('Invalid credentials')
      res.redirect('/')
    } else if (req.body.password !== result[0].password) {
      console.log('Invalid credentials')
      res.redirect('/')
    } else {
      res.redirect('/admin/dashboard')
    }
  })
})

router.get('/dashboard', (req, res) => {
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

  connection.query(`SELECT * FROM users`, (err, result) => {
    if (err) throw err
    res.send(adminDashboardPage({ result }))
  })
})

module.exports = router