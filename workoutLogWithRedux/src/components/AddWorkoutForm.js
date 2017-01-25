import React, { Component } from 'react'

export default class AddWorkoutForm extends Component {

  handleSubmit (event) {
    event.preventDefault()
    let type = this.refs.workout.value
    let workout = {
      date: new Date(),
      type
    }
    this.props.addWorkout(JSON.stringify(workout))
    this.refs.workout.value = ''
  }

  render () {
    return (
      <form className='form-group' onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          className='form-control'
          ref='workout'
          placeholder='Add workout...' />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}
