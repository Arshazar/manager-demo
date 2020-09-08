import useSWR, { mutate } from 'swr'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { CustomSWRType } from '../types/swr.types'
import { UsersInterface } from '../types/users.types'
import { tokenModifier } from './tokenModifier'

export const useCustomSWR = (props: CustomSWRType): UsersInterface[] => {
    const { current_page, isFilter, loadedUser, isUserEdited, setEditUser, onDataError } = props
    const states = useSelector((state) => state)
    const { filter } = states.filter

    const fetcher = (url: string) =>
        axios
            .post(url, filter, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: tokenModifier({ action: 'get' }),
                },
            })
            .then((res) => res.data.data.items)

    const { data, error } = useSWR<UsersInterface[] | undefined>(
        !isFilter ? process.env.LOCAL_ADDRESS + '/api/admin/v1/users?page=' + current_page : null,
        fetcher
    )

    if (error !== undefined) {
        onDataError('Session has been expired! Login again!')
        tokenModifier({ action: 'remove' })
    }

    const { data: filtered } = useSWR<UsersInterface[] | undefined>(
        isFilter ? process.env.LOCAL_ADDRESS + '/api/admin/v1/users?page=' + current_page : null,
        fetcher
    )

    const mutationTarget = isFilter ? filtered : data

    if (mutationTarget && isUserEdited) {
        const list = mutationTarget.map((u: UsersInterface) => {
            return u.id !== loadedUser.id ? u : { ...loadedUser }
        })
        mutate(process.env.LOCAL_ADDRESS + '/api/admin/v1/users?page=' + current_page, list, false)
            .then(() => console.log('user edited successfully'))
            .catch(() => onDataError('editing user encountered an error, try again'))
        setEditUser(false)
    }

    return mutationTarget
}
