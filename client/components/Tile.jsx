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
        {"id":1,
        "name":"JV",
        "image":"https://www.devacademy.co.nz/wp-content/uploads/2014/07/Joshua_Vial-1.png",
        "message":"If you haven't heard I own a puppy"},
        {"id":2,
        "name":"Harrison",
        "image":"https://avatars0.githubusercontent.com/u/19971385?v=3&s=400",
        "message":"I'm not getting paid for this"},
        {"id":3,
        "name":"Jess",
        "image":"https://avatars3.githubusercontent.com/u/25041420?v=3&s=400",
        "message":"HIHIMEMBER"},
        {"id":4,
        "name":"Thomasin",
        "image":"https://avatars3.githubusercontent.com/u/25238976?v=3&s=400",
        "message":"HIHIMEMBER"},
        {"id":5,
        "name":"Jeeves",
        "image":"https://avatars2.githubusercontent.com/u/25573215?v=3&s=400",
        "message":"HIHIMEMBER"},
        {"id":6,"name":"Matt","image":"https://avatars1.githubusercontent.com/u/25002466?v=3&s=460","message":"HIHIMEMBER"},
        {"id":7,"name":"Simon","image":"https://avatars2.githubusercontent.com/u/24973297?v=3&s=400","message":"HIHIMEMBER"},
        {"id":8,"name":"Gabe","image":"https://avatars2.githubusercontent.com/u/23735378?v=3&s=400","message":"HIHIMEMBER"},
        {"id":9,"name":"Zac","image":"https://avatars1.githubusercontent.com/u/25414477?v=3&s=400","message":"HIHIMEMBER"},
        {"id":10,"name":"Alan","image":"https://avatars2.githubusercontent.com/u/80690?v=3&s=400","message":"HIHIMEMBER"},
        {"id":11,"name":"Alisa","image":"https://avatars3.githubusercontent.com/u/25892646?v=3&s=400","message":"HIHIMEMBER"},
        {"id":12,"name":"Andrew","image":"https://avatars0.githubusercontent.com/u/25452399?v=3&s=400","message":"HIHIMEMBER"},
        {"id":13,"name":"Annelise","image":"https://avatars2.githubusercontent.com/u/25573215?v=3&s=400","message":"HIHIMEMBER"},
        {"id":14,"name":"Bev","image":"https://avatars0.githubusercontent.com/u/25465309?v=3&s=400","message":"HIHIMEMBER"},
        {"id":15,"name":"Cici","image":"https://avatars3.githubusercontent.com/u/25610428?v=3&s=400","message":"HIHIMEMBER"},
        {"id":16,"name":"Elena","image":"https://avatars0.githubusercontent.com/u/3125856?v=3&s=400","message":"HIHIMEMBER"},
        {"id":17,"name":"Kelly","image":"https://avatars0.githubusercontent.com/u/25888248?v=3&s=400","message":"HIHIMEMBER"},
        {"id":18,"name":"Natalie","image":"https://avatars1.githubusercontent.com/u/25476337?v=3&s=400","message":"HIHIMEMBER"},
        {"id":19,"name":"Sarah","image":"https://avatars2.githubusercontent.com/u/25313000?v=3&s=400","message":"HIHIMEMBER"},
        {"id":20,"name":"Sherly","image":"https://avatars0.githubusercontent.com/u/15813732?v=3&s=400","message":"HIHIMEMBER"},
        {"id":21,"name":"Albie","image":"https://avatars0.githubusercontent.com/u/24601704?v=3&s=400","message":"HIHIMEMBER"}
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
    this.selectUser()
  }

  showImage(){
    return <img className='userImage' src= {this.state.user.image}/>
  }


  render() {
    return (
      <div onClick={(e) => this.showUser(e)} className='tile'>
        {this.state.visible && this.showImage()}
      </div>
    )
  }

}
