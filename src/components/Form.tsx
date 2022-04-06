import { SyntheticEvent, useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Form = () => {
    const [inputValue, setInputValue] = useState('')
    const { user, fetchData } = useContext(UserContext)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        if(inputValue) {
          fetchData(inputValue)
        }
    } 
    return (
      <form className="h-1/2 w-full md:w-4/5 lg:w-3/5 2xl:w-2/5 p-4 flex flex-col justify-evenly items-center text-center z-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white font-sans text-3xl sm:text-4xl md:text-5xl">
          Introduce yourself <br /> with <span className='font-bold tracking-wider'>Github</span>
          </h1>
        <div className="flex flex-col items-center justify-evenly h-1/2 w-8/12">
          <label className='text-gainsboro text-xl' htmlFor="user-input">What is your account name?</label>
          <input type="text" 
            id="user-input"
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="slenderb13"
            className="h-12 rounded-md text-center w-full" 
          />
          <input className="text-erie-black tracking-wider 
            font-sans h-12 w-full 
            rounded-md bg-marigold 
            hover:brightness-90 hover:cursor-pointer" 
          type="submit" 
          value="THAT'S ME" />
        </div>
      </form>
    )
}

export default Form