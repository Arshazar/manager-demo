import { NextStateType } from './redux.types'
import { UsersInterface } from './users.types'

export type LoginReqType = {
    email: string
    password: string
}

export type ReduceStateType = (action: (state: NextStateType) => void, data: NextStateType) => void

export interface SetTokenInterface {
    action: string
    token?: string
}

export interface UserTableInterface {
    data: UsersInterface[]
    current_page: number
    setCurrent: (current_page: number) => void
    loadUser: (loadedUser: UsersInterface | null) => void
    setEditShow: (isUserEdited: boolean) => void
}
