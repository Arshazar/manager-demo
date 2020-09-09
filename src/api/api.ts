import axios from 'axios'
import { AdminType } from '../types/admin.types'
import { LoginReqType, ReduceStateType } from '../types/app.types'
import { NextRouter } from 'next/dist/next-server/lib/router/router'
import { setAdmin } from '../redux/admin/admin.actions'
import { setError } from '../redux/app/app.actions'
import { tokenModifier } from './tokenModifier'
import { EditUserAPIInterface } from '../types/modals.types'
import { UsersInterface } from '../types/users.types'

export const loginAPI = (
    fields: LoginReqType,
    router: NextRouter,
    reduceState: ReduceStateType
): void => {
    axios
        .post('/api/admin/v1/auth/login', fields)
        .then((resp) => {
            let token = resp.data.data.token
            const token_type = resp.data.data.token_type
            token = token_type + ' ' + token
            tokenModifier({ action: 'set', token })
            router.push('/dashboard')
        })
        .catch(() => {
            reduceState(setError, 'Login failed, try again!')
        })
}

export const editProfileAPI = (
    fields: AdminType,
    admin: AdminType,
    reduceState: ReduceStateType,
    onHide: () => void
): void => {
    axios
        .post('/api/admin/v1/auth/update', fields, {
            headers: {
                'content-type': 'application/json',
                Authorization: tokenModifier({ action: 'get' }),
            },
        })
        .then(() => {
            reduceState(setAdmin, {
                ...admin,
                name: fields.name,
            })
            onHide()
        })
        .catch(() => reduceState(setError, 'Error in updating profile, try again.'))
}

export const adminAPI = (router: NextRouter, reduceState: ReduceStateType): void => {
    axios
        .post(
            '/api/admin/v1/auth/user',
            {},
            {
                headers: {
                    'content-type': 'application/json',
                    Authorization: tokenModifier({ action: 'get' }),
                },
            }
        )
        .then((resp) => {
            const { data } = resp.data
            reduceState(setAdmin, data)
        })
        .catch(() => {
            router.push('/').then(() => {
                reduceState(setError, 'Error retrieving data, try again')
                reduceState(setAdmin, null)
                tokenModifier({ action: 'remove' })
            })
        })
}

export const editUserAPI = (props: EditUserAPIInterface): void => {
    const { fields, user, onHide, setEditUser, changeError, loadUser } = props
    const { name, verification, language_id, status, user_level, notes } = fields
    axios
        .put(process.env.LOCAL_ADDRESS + '/api/admin/v1/users/edit/' + user.id, fields, {
            headers: {
                'content-type': 'application/json',
                Authorization: tokenModifier({ action: 'get' }),
            },
        })
        .then(() => {
            setEditUser(true)
            loadUser(<UsersInterface>{
                ...user,
                name,
                verification,
                language: {
                    id: language_id,
                    name: user.language.name,
                },
                status,
                user_level,
                notes,
            })
            onHide()
        })
        .catch(() => changeError('Error editing user, try again'))
}
