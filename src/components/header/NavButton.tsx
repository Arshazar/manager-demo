import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openDrawer } from '../../redux/app/app.actions'

export const NavButton = (): JSX.Element => {
    const dispatch = useDispatch()
    const isDrawerOpen = useSelector((state) => state.isDrawerOpen.isDrawerOpen)

    return (
        <button className="toggle-button" onClick={() => dispatch(openDrawer(!isDrawerOpen))}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
    )
}
