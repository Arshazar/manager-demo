import { SetTokenInterface } from '../types/app.types'

export const tokenModifier = ({ action, token }: SetTokenInterface): void | string => {
    switch (action) {
        case 'set':
            window.localStorage.setItem('token', token)
            break
        case 'get':
            return window.localStorage.getItem('token')
        case 'remove':
            window.localStorage.removeItem('token')
            break
    }
}
