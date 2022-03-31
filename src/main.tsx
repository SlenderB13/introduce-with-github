import React from 'react'
import ReactDOM from 'react-dom'
import UserProvider from './contexts/UserProvider'
import Home from './Home'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Home />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
