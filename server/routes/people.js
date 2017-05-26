var express = require('express')
let router = express.Router()
var request = require('superagent')

router.get('/', (req, res) => {
  request
    .get(`https://api.github.com/users/${req.query.name}`)
    .end((err, result) => {
      res.json(result.body.avatar_url)
      console.log(result.body);
      console.log(`pic of ${req.query.name} is being sent from github api`);
    })
})

module.exports = router
