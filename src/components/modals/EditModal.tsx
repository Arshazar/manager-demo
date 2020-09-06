import React from 'react'
import { EditUser } from './forms/EditUser'
import { useDispatch } from 'react-redux'
import { setError } from '../../redux/app/app.actions'
import { Modal } from 'antd'
import { EditModalType } from '../../types/modals.types'
import { editUserAPI } from '../../api/api'

export const EditModal = (props: EditModalType): JSX.Element => {
    const { user, onHide, show, setEditUser, loadUser } = props
    const dispatch = useDispatch()

    const changeError = (error) => {
        dispatch(setError(error))
    }

    const saveEditedUser = (fields) => {
        editUserAPI({ fields, user, onHide, setEditUser, loadUser, changeError })
    }

    const onCancel = () => {
        onHide()
        loadUser(null)
    }

    return (
        <Modal footer={null} title="Edit User" visible={show} onCancel={onCancel}>
            <EditUser user={user} onCancel={onCancel} saveEditedUser={saveEditedUser} />
        </Modal>
    )
}
