require('dotenv').config()
const express = require('express')
const path = require('path')
const colors = require('colors')

const app = express()

// Require routes
const index = require('./routes/index')
const admin = require('./routes/admin/index')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Mount routes
app.use('/', index)
app.use('/admin', admin)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`.blue)
})