import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../api'
import Header from './Header'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Header />
        </div>
      </Router>
    )
  }
}
