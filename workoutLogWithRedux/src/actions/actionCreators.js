export function addWorkout (workout) {
  return {
    type: 'ADD_WORKOUT',
    payload: workout
  }
}

export function removeWorkout (index) {
  return {
    type: 'REMOVE_WORKOUT',
    payload: index
  }
}
