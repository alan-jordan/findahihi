import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

test.serial.cb('GET user profile picture url', t => {
  request(app)
    .get('/api/v1/people')
    .query({name: 'matt-raines'})
    .expect(200)
    .end((err, res) => {
      return new Promise ((resolve, reject) => {
        t.ifError(err)
        t.is(res.body,'https://avatars1.githubusercontent.com/u/25002466?v=3')
        t.end()
        resolve()
      })
    })
})
