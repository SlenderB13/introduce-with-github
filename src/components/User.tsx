import { useContext, useEffect, useRef } from 'react'
import UserContext from "../contexts/UserContext"
import gsap from 'gsap'

const User= () => {
    const { user } = useContext(UserContext)
    const userWrapperRef = useRef<HTMLDivElement>(null)

    const tl = gsap.timeline()

    useEffect(() => {
        tl.from(userWrapperRef.current, {opacity: 0, duration: 0.8})
        tl.from(userWrapperRef.current, {x: -100, duration: 0.5}, '<')
    })

    return (
        <div ref={userWrapperRef} className="h-3/5 md:w-4/5 flex flex-col items-center justify-around z-10">
            <figure className="w-85 h-85 rounded-full border-solid border-4 border-marigold">
                <img className="w-80 h-80 rounded-full" src={user?.avatar_url} alt="user avatar" />
            </figure>
            <h1 className="text-white font-bold tracking-wider text-5xl">{user?.name}</h1>
            <h2 className="text-white text-2xl">{user?.location}</h2>
            <h3 className="text-white lg:text-3xl md:text-2xl">{user?.bio}</h3>
        </div>
    )
}

export default User