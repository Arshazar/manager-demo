import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { openEditProfileModal, setError } from '../../redux/app/app.actions'
import { Header } from '../header/Header'
import { SearchModal } from '../modals/SearchModal'
import { ProfileModal } from '../modals/ProfileModal'
import { EditModal } from '../modals/EditModal'
import { useCustomSWR } from '../../api/useCustomSWR'
import { adminAPI } from '../../api/api'
import { UserTable } from './UserTable'
import { UsersInterface } from '../../types/users.types'
import { tokenModifier } from '../../api/tokenModifier'

export const Administration = (): JSX.Element => {
    const router = useRouter()
    const states = useSelector((state) => state)
    const dispatch = useDispatch()

    const { admin } = states.admin
    const { isEditProfileModalOpen } = states.isEditProfileModalOpen
    //...................states.............................
    const [loadedUser, loadUser] = useState<UsersInterface | null>(null)
    const [isFilter, filterise] = useState<boolean>(false)
    const [editShow, setEditShow] = useState<boolean>(false)
    const [searchShow, setSearchShow] = useState<boolean>(false)
    const [current_page, setCurrent] = useState<number>(1)
    const [isUserEdited, setEditUser] = useState<boolean>(false)

    const onDataError = (error) => {
        router.push('/').then(() => dispatch(setError(error)))
    }

    //data fetching
    const swrProps = {
        current_page,
        isFilter,
        loadedUser,
        isUserEdited,
        setEditUser,
        loadUser,
        onDataError,
    }
    let data = useCustomSWR(swrProps)

    const reduceState = (action, data) => {
        dispatch(action(data))
    }

    useEffect(() => {
        if (admin === null && tokenModifier({ action: 'get' }) !== null) {
            adminAPI(router, reduceState)
        }
    }, [admin, router, reduceState])

    return (
        <div className="dashboard">
            <Header />
            {isEditProfileModalOpen ? (
                <ProfileModal
                    show={isEditProfileModalOpen}
                    onHide={() => reduceState(openEditProfileModal, false)}
                />
            ) : null}
            {searchShow ? (
                <SearchModal
                    filterise={filterise}
                    show={searchShow}
                    onHide={() => setSearchShow(false)}
                />
            ) : null}
            {editShow ? (
                <EditModal
                    user={loadedUser}
                    loadUser={loadUser}
                    setEditUser={setEditUser}
                    show={editShow}
                    onHide={() => setEditShow(false)}
                />
            ) : null}
            <div className="search-bar">
                <button onClick={() => setSearchShow(true)}>
                    <img width="44px" src={require('../../images/search-bar.svg')} alt="search" />
                </button>
            </div>
            <UserTable
                data={data}
                current_page={current_page}
                setCurrent={setCurrent}
                loadUser={loadUser}
                setEditShow={setEditShow}
            />
        </div>
    )
}
