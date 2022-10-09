const express = require('express')
const router = express.Router()
const indexPage = require('../views/index')

router.get('/', (req, res) => {
  res.send(indexPage({}))
})

module.exports = router