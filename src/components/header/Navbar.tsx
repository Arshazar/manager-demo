import React from 'react'
import { NavButton } from './NavButton'
import { Toolbar } from '../toolbar/Toolbar'

export const Navbar = (): JSX.Element => (
    <div className="header">
        <nav className="header__navigation">
            <div className="nav-button">
                <NavButton />
            </div>
            <Toolbar />
            <div className="spacer" />
        </nav>
    </div>
)
