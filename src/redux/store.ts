import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducers } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const initialiseStore = (initialState = {}) => {
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
}
