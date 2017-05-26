import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data'

export default class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.selectUser()
  }

  selectUser(){
    this.setState({
      user: data.users[0]
    })
  }


  render() {
    return (
      <div className='tile'>
        {this.state.user && <h1>{this.state.user.login}</h1>}
      </div>
    )
  }

}
