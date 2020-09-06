import { UsersInterface } from './users.types'
import { ObjectType } from './redux.types'

export type EditModalType = {
    show: boolean
    onHide: () => void
    user: UsersInterface
    setEditUser: (isUserEdited: boolean) => void
    loadUser: (loadedUser: UsersInterface | null) => void
}

export type EditUserType = {
    user: UsersInterface
    onCancel: () => void
    saveEditedUser: (fields: ObjectType) => void
}

export type EditProfileType = {
    onHide: () => void
    onEdit: (fields: ObjectType) => void
}

export type SearchUserType = {
    onHide: () => void
    onSearch: (fields: ObjectType) => void
}

export type FilterType = {
    id: number
    status: string
    created_at_from: string
}

export type SearchModalType = {
    show: boolean
    onHide: () => void
    filterise: (isFilter: boolean) => void
}

export type ProfileModalType = {
    show: boolean
    onHide: () => void
}

export interface EditUserAPIInterface {
    fields: Record<string, string | number>
    user: UsersInterface
    onHide: () => void
    setEditUser: (IsUserEdited: boolean) => void
    loadUser: (loadedUser: UsersInterface) => void
    changeError: (error: string) => void
}
