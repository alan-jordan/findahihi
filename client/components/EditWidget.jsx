import React from 'react'

import api from '../api'

export default class EditWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: '',
      rating: ''
    }
  }

  fieldChanged (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  editWidget () {
    console.log(e);
    e.preventDefault()
    const widget = this.state
    api.updateWidget(widget, this.props.updateWidget)
  }

  render () {
    return (
      <div className='edit-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.name}
            /></p>
          <p><input placeholder='Price' name='price'
            onChange={e => this.fieldChanged(e)}
            value={this.state.price}
            /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={e => this.fieldChanged(e)}
            value={this.state.mfg}
            /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={e => this.fieldChanged(e)}
            value={this.state.inStock}
            /></p>
          <p><input placeholder='Rating' name='rating'
              onChange={e => this.fieldChanged(e)}
              value={this.state.rating}
              /></p>
          <button onClick={e => this.editWidget(e)}>Edit widget</button> {' '}
          <a href='#' onClick={this.props.finishEdit}>Cancel</a>
        </form>
      </div>
    )
  }
}
