import React from 'react'
import { useSelector } from 'react-redux'
import { Toolbar } from './Toolbar'

export const SideDrawer = (): JSX.Element => {
    const { isDrawerOpen } = useSelector((state) => state.isDrawerOpen)

    let drawerClasses = 'side-drawer'
    if (isDrawerOpen) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses}>
            <Toolbar />
        </nav>
    )
}
