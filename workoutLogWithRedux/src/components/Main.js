import React, { Component } from 'react'
import AddWorkoutForm from './AddWorkoutForm'
import Workout from './Workout'
export default class Main extends Component {
  render () {
    const {addWorkout} = {...this.props}
    return (
        <div>
        <AddWorkoutForm addWorkout={addWorkout}/>
        {this.props.workouts.workouts.map((workout, i) => (
           <Workout key={i} index={i} workout={workout} {...this.props}/>
         ))}
      </div>
    )
  }
}
