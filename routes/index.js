module.exports = (apiService) => {
  
  const express = require('express');
  const router = express.Router();
  
  router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Wordsmith Inc.', 
      history: apiService.history()
    });
  });

  router.post('/reverse', function(req, res) {
    apiService.compute(req.body.content)
    res.redirect('/')
  });

  return router;
};
