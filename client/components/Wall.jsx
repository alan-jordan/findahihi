import React from 'react'
import {Link} from 'react-router-dom'
import Tile from './Tile'
export default class Wall extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='wall'>
          {Array(12).fill(".").map((item, i) => {
            return <Tile key={i}/>
          })}
      </div>
    )
  }

}
