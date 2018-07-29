import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App'

// NO NEED FOR STORE YET
//
// import configureStore from './store'
//
// const store = configureStore()
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// )

ReactDOM.render(
    <App />,
  document.getElementById('root'),
)
