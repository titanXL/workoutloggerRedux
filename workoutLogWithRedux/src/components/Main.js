import React, { Component } from 'react'
import AddWorkoutForm from './AddWorkoutForm'
import Workout from './Workout'
export default class Main extends Component {
  render () {
    return (
      <div>
        <AddWorkoutForm {...this.props}/>
        {this.props.workouts.map((workout, i) => (
           <Workout key={i} index={i} workout={workout} {...this.props}/>
         ))}
      </div>
    )
  }
}
