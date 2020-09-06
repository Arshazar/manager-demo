import { ObjectType } from '../../types/redux.types'

const initialStateAdmin = {
    admin: null,
}

export const setAdminReducer = (
    state = initialStateAdmin,
    action: Record<string, unknown>
): ObjectType => {
    switch (action.type) {
        case 'SET_ADMIN':
            return {
                ...state,
                admin: action.payload,
            }
        default:
            return state
    }
}
