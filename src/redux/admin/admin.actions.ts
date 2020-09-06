import { ObjectType } from '../../types/redux.types'

export const setAdmin = (admin: string): ObjectType => ({
    type: 'SET_ADMIN',
    payload: admin,
})
