import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setError } from '../redux/app/app.actions'
import { Modal } from 'antd'
import { CustomAppProps } from '../types/redux.types'

export const CustomApp = (props: CustomAppProps): JSX.Element => {
    const { Component, pageProps } = props

    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.error)

    useEffect(() => {
        if (error !== null && error !== undefined) {
            Modal.error({
                title: 'Error',
                content: error,
                okText: 'Close',
                okType: 'danger',
                onOk: () => {
                    close()
                    dispatch(setError(null))
                },
            })
        }
    }, [error, dispatch])

    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}
