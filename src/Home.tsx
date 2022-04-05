import { useContext } from 'react'
import UserContext from './contexts/UserContext'
import User from './components/User'
import Form from './components/Form'
import spaceSVG from './img/desenho.svg'

const Home = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-erie-black">
      <img src={spaceSVG} alt="person with phone"
      className="absolute z-0 left-10 -bottom-10 pointer-events-none" />
      {user ? <User></User> : <Form></Form>}
    </div>
  )
}

export default Home
