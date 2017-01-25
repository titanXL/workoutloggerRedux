import { createStore } from 'redux'

import rootReducer from './reducers/root'

let workout = JSON.stringify({'date': new Date(), 'type': 'CB'})
let workout1 = JSON.stringify({'date': new Date(), 'type': 'BT'})

const defaultState = {
  workouts: [workout, workout1]
}

const store = createStore(rootReducer, defaultState)

export default store
