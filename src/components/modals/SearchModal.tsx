import React from 'react'
import { Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { SearchUser } from './forms/SearchUser'
import { SearchModalType } from '../../types/modals.types'
import { setFilter } from '../../redux/app/app.actions'

export const SearchModal = (props: SearchModalType): JSX.Element => {
    const { show, onHide, filterise } = props
    const dispatch = useDispatch()

    const reduceFilter = (data) => {
        dispatch(setFilter(data))
    }

    const onSearch = (fields) => {
        if (fields.status === '' && fields.id === '' && fields.created_at_from === '') {
            reduceFilter(null)
            filterise(true)
            filterise(false)
        } else {
            reduceFilter(fields)
            filterise(false)
            filterise(true)
        }
        onHide()
    }

    return (
        <Modal footer={null} title="Search Users" visible={show} onCancel={onHide}>
            <SearchUser onHide={onHide} onSearch={onSearch} />
        </Modal>
    )
}
