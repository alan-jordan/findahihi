import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

// the server keeps the widgets in memory so no knex setup needed

test.serial.cb('GET /people', t => {
  request(app)
    .get('/api/v1/people')
    .expect(200)
    .end((err, res) => {
      t.ifError(err)
      t.end()
    })
})
