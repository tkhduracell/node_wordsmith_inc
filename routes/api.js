module.exports = (service) => {
  
  const express = require('express');
  const router = express.Router();
 
  router.post('/reverse', function(req, res) {
    res.send(service.compute(req.body))
  });

  router.get('/history', function(req, res) {
    res.send(service.history())
  });

  return router;
}
