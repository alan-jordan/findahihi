import React from 'react'

import * as api from '../api'

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
      <div>
        Hi this is App component
        <img src={this.state.imgUrl}></img>
      </div>
    )
  }
}
