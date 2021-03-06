import { useState } from 'react'
import User from '../types/User'
import UserContext from "./UserContext"

const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)

    const fetchData = async (username: string) => {
        const req = await fetch(`https://api.github.com/users/${username}`)
        const res = await req.json()
        setUser(res)
    }

    const clearUser = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, fetchData, clearUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider