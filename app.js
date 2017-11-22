const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()

app.use(compression())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'webapp/public')))
app.use(express.static(path.join(__dirname, 'public')))

if (app.get('env') === 'development') {
  app.use(logger('dev'))
} else {
  app.set('view cache', true)
  app.use(logger('common'))
}

require('./router')(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  res.status(500)
  res.send(app.get('env') === 'development' ? {message: err.toString()} : '')
})

module.exports = app
