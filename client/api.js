const request = require('superagent')

function getPerson(name, callback) {
  request
    .get('/api/v1/people')
    .query({name})
    .end((err, res) => {
      if(!err) callback(res.body)
      else console.log(err)
    })
}

module.exports = {getPerson}
