import React from 'react'
import { useDispatch } from 'react-redux'
import { openDrawer } from '../../redux/app/app.actions'

export const BackDrop = (): JSX.Element => {
    const dispatch = useDispatch()

    return (
        <div
            role="button"
            onKeyDown={dispatch(openDrawer)}
            tabIndex={0}
            className="backdrop"
            onClick={() => dispatch(openDrawer(false))}
        />
    )
}
