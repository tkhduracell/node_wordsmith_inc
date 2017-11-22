module.exports = (service) => {
  const express = require('express')
  const router = express.Router()

  /**
   * @api {post} /reverse Reverse paragraph (application/json)
   * @apiName Reverse
   * @apiGroup Main
   *
   * @apiParam {String} content The text content that should be processed.
   *
   * @apiSuccess {String} content The original content
   * @apiSuccess {String} output The text conent that has each word reversed.
   *
   * @apiHeaderExample {json} Header-Example:
   *     {
   *       "Content-Type": "application/json"
   *     }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "output": "ytrewq qwerty"
   *     }
   */
  router.post('/reverse', function (req, res) {
    res.send({
      content: req.body.content,
      output: service.compute(req.body.content)
    })
  })

  /**
   * @api {get} /history Get history (application/json)
   * @apiName History
   * @apiGroup Main
   *
   * @apiSuccess {Array[Object]} history The list of previsouly revered texts
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "history": [
   *          { source: "ytrewq qwerty", output: "qwerty ytrewq"}
   *       ]
   *     }
   */
  router.get('/history', function (req, res) {
    res.send({
      history: service.history()
    })
  })

  return router
}
