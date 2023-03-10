import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import globalReducer from 'state'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from 'App'

const store = configureStore({
  reducer:{
    global: globalReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
); 