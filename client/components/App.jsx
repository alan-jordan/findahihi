import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../api'
import Header from './Header'
import Wall from './Wall'

export default class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        imgUrl: ''
      }
    }

getPerson(name){
  api.getPerson(name, (err, userData) => {
    if (!err) console.log(userData);
    else console.log(err);
  })
}

componentDidMount(){
  api.getPerson("alan-jordan", (imgUrl) => {
    this.setState({imgUrl})
  })
}

  render () {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path ='/' exact={true} component = {Wall} />
          <img src={this.state.imgUrl}></img>
        </div>
      </Router>

    )
  }
}
