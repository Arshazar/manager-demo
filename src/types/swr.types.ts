import { UsersInterface } from './users.types'

export type CustomSWRType = {
    current_page: number
    isFilter: boolean
    loadedUser: UsersInterface | null
    isUserEdited: boolean
    setEditUser: (isUserEdited: boolean) => void
    loadUser: (loadedUser: UsersInterface | null) => void
    onDataError: (error: string) => void
}
