import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from './Navbar'
import { SideDrawer } from '../toolbar/SideDrawer'
import { BackDrop } from '../toolbar/BackDrop'

export const Header = (): JSX.Element => {
    const isDrawerOpen = useSelector((state) => state.isDrawerOpen.isDrawerOpen)

    let backdrop

    if (isDrawerOpen) {
        backdrop = <BackDrop />
    }

    return (
        <>
            <Navbar />
            <SideDrawer />
            {backdrop}
        </>
    )
}
