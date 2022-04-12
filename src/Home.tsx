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
      className="absolute z-0 left-10 -bottom-10 pointer-events-none w-3/4 md:w-1/2" />
      {user ? <User></User> : <Form></Form>}
      <p className="absolute bottom-4 text-white">
        Made with <span>&#x2665;</span> by 
        <a className="text-marigold ml-1 underline decoration-1" target='_blank' href='https://github.com/slenderb13'>Lucas Silva</a>
      </p>
    </div>
  )
}

export default Home
