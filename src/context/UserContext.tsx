import { createContext } from 'react'

export interface IUser {
    name: string,
    bio?: string,
    location?: string
}

const UserContext = createContext<IUser>({name: '', bio: '', location: ''})

export default UserContext