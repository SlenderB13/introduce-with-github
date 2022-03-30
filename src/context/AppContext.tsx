import React, { useContext } from 'react'
import UserContext from './UserContext'

const AppContext: React.FC = ({children}) => {
  const { name, bio, location } = useContext(UserContext)

  return (
      <UserContext.Provider value={{name, bio, location}}>
         {children} 
      </UserContext.Provider>
  )
}

export default AppContext