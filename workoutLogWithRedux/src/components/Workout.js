import React, { Component } from 'react'

export default class Workout extends Component {
  handleClick (index) {
    this.props.removeWorkout(index)
  }
  render () {
    let date = JSON.parse(this.props.workout)
    return (
      <div className='form-control' onClick={this.handleClick.bind(this, this.props.index)}>
        {date.date} -
        {date.type}
      </div>
    )
  }
}
