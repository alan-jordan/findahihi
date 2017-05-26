import React from 'react'
import {Link} from 'react-router-dom'
import Tile from './Tile'
export default class Wall extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='row'>
        <div className='col col-md-12'>
          {Array(12).fill(".").map((item) => {
            return <Tile />
          })}
        </div>
      </div>
    )
  }

}
