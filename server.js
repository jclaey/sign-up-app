require('dotenv').config()
const express = require('express')
const path = require('path')
const colors = require('colors')
const mysql = require('mysql')

const app = express()

// Require routes
const index = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
  password: process.env.ROOT_PASS,
	database: 'comments_app'
})

connection.connect(function(err) {
  if (err) throw err
  console.log("Connected to MySQL database".magenta)
})

// Mount routes
app.use('/', index)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.blue)
})