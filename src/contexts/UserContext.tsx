import { createContext } from "react"
import User from "../types/User"

export type UserContextType = {
    user: User | null,
    fetchData: (url: string) => Promise<void>
    clearUser: () => void
}

const UserContext = createContext<UserContextType>(null!)

export default UserContext