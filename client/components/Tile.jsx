import React from 'react'
import {Link} from 'react-router-dom'
import shuffle from 'shuffle-array'
import * as api from '../api'


export default class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      users : [
        {
          username: "alan-jordan",
          imgUrl: 'https://avatars0.githubusercontent.com/u/80690?v=3&s=460'
        }
        ],
      imgUrl: null,
      visible: false
    }
  }

  componentDidMount(){
    this.selectUser()
    this.getData()
  }



  selectUser(){
    const user=shuffle(this.state.users)[0]
    this.setState({
      user: user
    })
  }

  getData(){
    api.getPerson(this.state.user, (imgUrl) => {
      this.setState({imgUrl})
    })
  }


  showUser() {
    let visible = !this.state.visible
    this.setState({visible})
  }

  showImage(){
    return <img className='userImage' src= {this.state.imgUrl}/>
  }


  render() {
    return (
      <div onClick={(e) => this.showUser(e)} className='tile'>
        {this.state.visible && this.showImage()}
      </div>
    )
  }

}
