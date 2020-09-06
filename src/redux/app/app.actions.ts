import { ObjectType } from '../../types/redux.types'

export const setError = (error: string): ObjectType => ({
    type: 'SET_ERROR',
    payload: error,
})

export const setFilter = (filter: string): ObjectType => ({
    type: 'SET_FILTER',
    payload: filter,
})

export const openEditProfileModal = (isEditProfileModalOpen: boolean): ObjectType => ({
    type: 'OPEN_EDIT_PROFILE_MODAL',
    payload: isEditProfileModalOpen,
})

export const openDrawer = (isDrawerOpen: boolean): ObjectType => ({
    type: 'OPEN_DRAWER',
    payload: isDrawerOpen,
})
