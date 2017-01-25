import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { Router, browserHistory, Route } from 'react-router'
import store from './store'

const router = (
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
</Provider>
)

ReactDOM.render(router
  ,
  document.getElementById('root')
)
