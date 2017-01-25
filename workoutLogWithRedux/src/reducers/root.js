function workouts (state = [] , action) {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return Object.assign({}, state, {
        workouts: [...state.workouts, action.payload]
      })
    case 'REMOVE_WORKOUT':
      return {...state,
        workouts: [...state.workouts.slice(0, action.payload),
        ...state.workouts.slice(action.payload + 1)]}
    default:
      return state
  }
}

export default workouts
