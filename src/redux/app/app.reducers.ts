import { ObjectType } from '../../types/redux.types'

//initial states
const initialStateError = {
    error: null,
}

const initialStateFilter = {
    filter: null,
}

const initialStateEditProfileModal = {
    isEditProfileModalOpen: false,
}

const initialStateDrawer = {
    isDrawerOpen: false,
}

//Reducers
export const setErrorReducer = (state = initialStateError, action: ObjectType): ObjectType => {
    switch (action.type) {
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}

export const setFilterReducer = (state = initialStateFilter, action: ObjectType): ObjectType => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            }
        default:
            return state
    }
}

export const openEditProfileModalReducer = (
    state = initialStateEditProfileModal,
    action: ObjectType
): ObjectType => {
    switch (action.type) {
        case 'OPEN_EDIT_PROFILE_MODAL':
            return {
                ...state,
                isEditProfileModalOpen: action.payload,
            }
        default:
            return state
    }
}

export const openDrawerReducer = (state = initialStateDrawer, action: ObjectType): ObjectType => {
    switch (action.type) {
        case 'OPEN_DRAWER':
            return {
                ...state,
                isDrawerOpen: action.payload,
            }
        default:
            return state
    }
}
