import { combineReducers } from 'redux'
import { setAdminReducer } from './admin/admin.reducers'
import {
    setErrorReducer,
    setFilterReducer,
    openDrawerReducer,
    openEditProfileModalReducer,
} from './app/app.reducers'

export const reducers = combineReducers({
    admin: setAdminReducer,
    error: setErrorReducer,
    filter: setFilterReducer,
    isDrawerOpen: openDrawerReducer,
    isEditProfileModalOpen: openEditProfileModalReducer,
})
