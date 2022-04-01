import { useContext } from 'react'
import UserContext from "../contexts/UserContext"

const User= () => {
    const { user } = useContext(UserContext)

    return (
        <div className="h-3/5 flex flex-col items-center justify-around z-10">
            <figure className="w-85 h-85 rounded-full border-solid border-4 border-marigold">
                <img className="w-80 h-80 rounded-full" src={user?.avatar_url} alt="user avatar" />
            </figure>
            <h1 className="text-white font-bold tracking-wider text-5xl">{user?.name}</h1>
            <h2 className="text-white text-2xl">{user?.location}</h2>
            <h3 className="text-white text-3xl">{user?.bio}</h3>
        </div>
    )
}

export default User