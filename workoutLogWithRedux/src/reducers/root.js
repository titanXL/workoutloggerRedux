function root (state, action) {
  return {
    workouts: workouts(state.workouts, action)
  }
}


function workouts (state = [] , action) {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return [...state, action.payload]
    case 'REMOVE_WORKOUT':
      return [...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)]
    default:
      return state
  }
}

export default root
