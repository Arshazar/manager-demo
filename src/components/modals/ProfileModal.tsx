import React from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { EditProfile } from './forms/EditProfile'
import { editProfileAPI } from '../../api/api'
import { ProfileModalType } from '../../types/modals.types'
import { tokenModifier } from '../../api/tokenModifier'

export const ProfileModal = ({ show, onHide }: ProfileModalType): JSX.Element => {
    const states = useSelector((state) => state)
    const dispatch = useDispatch()

    const { admin } = states.admin

    const reduceState = (action, data) => {
        dispatch(action(data))
    }

    const onEdit = (fields) => {
        if (tokenModifier({ action: 'get' }) !== null) {
            editProfileAPI(fields, admin, reduceState, onHide)
        }
    }

    return (
        <Modal title="Edit My Profile" footer={null} visible={show} onCancel={onHide}>
            <EditProfile onHide={onHide} onEdit={onEdit} />
        </Modal>
    )
}
