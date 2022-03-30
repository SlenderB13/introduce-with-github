import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import AppContext from './context/AppContext'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <Home />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
)
