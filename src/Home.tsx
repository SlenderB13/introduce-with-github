import { SyntheticEvent, useContext, useEffect, useState } from 'react'
import UserContext from './contexts/UserContext'

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const { user, fetchData } = useContext(UserContext)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    fetchData(inputValue)
  } 

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-erie-black">
      <img src="../assets/desenho.svg" alt="person with phone"
      className="absolute z-0 left-10 -bottom-10 pointer-events-none" />
      <form className="h-1/2 w-2/5 p-4 flex flex-col justify-evenly items-center text-center z-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white font-sans md:text-5xl sm:text-3xl">
          Introduce yourself <br /> with <span className='font-bold tracking-wider'>Github</span>
          </h1>
        <div className="flex flex-col items-center justify-evenly h-1/2 w-8/12">
          <label className='text-gainsboro text-xl' htmlFor="user-input">What is your account name?</label>
          <input type="text" 
            id="user-input"
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="slenderb13"
            className="h-12 rounded-md indent-3 w-full" 
          />
          <input className="text-erie-black tracking-wider font-sans h-12 w-full rounded-md bg-marigold" 
          type="submit" 
          value="THAT'S ME" />
        </div>
      </form>
    </div>
  )
}

export default Home
