import test from 'ava'
import request from 'supertest'
// import React from 'react'
// import { shallow, mount, render } from 'enzyme'
// import * as sinon from 'sinon'

import './setup-dom'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test.cb('initialize test', t => {
  t.pass()
  t.end()
})

// test('Container class exists', t => {
//   const wrapper = mount(<App />)
//   t.is(wrapper.find('.container').exists(), true)
// })
//
// test('Logo class in nav bar contains find a hihi', t => {
//   const wrapper = mount(<App />)
//   t.is(wrapper.find('.logo a').text(), 'find a hihi')
// })
