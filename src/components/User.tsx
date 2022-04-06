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
            <figure className="w-45 h-45 md:w-[53] md:h-[53] lg:w-[61] lg:h-[61] rounded-full border-solid border-4 border-marigold">
                <img className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full" src={user?.avatar_url} alt="user avatar" />
            </figure>
            <h1 className="text-white font-bold tracking-wider text-5xl">{user?.name}</h1>
            <h2 className="text-white text-2xl">{user?.location ? user.location : 'User do not have a location'}</h2>
            <h3 className="text-white text-2xl max-w-sm lg:max-w-4xl lg:text-3xl">{ user?.bio ? user.bio : 'User do not have a description'}</h3>
        </div>
    )
}

export default User