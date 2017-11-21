module.exports = (apiService) => {
  const express = require('express')
  const router = express.Router()

  router.get('/', function (req, res, next) {
    res.sendFile('../webapp/public/index.html')
  })

  return router
}
