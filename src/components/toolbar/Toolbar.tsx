import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { openDrawer, openEditProfileModal } from '../../redux/app/app.actions'
import { tokenModifier } from '../../api/tokenModifier'

export const Toolbar = (): JSX.Element => {
    const router = useRouter()
    const dispatch = useDispatch()

    const onSignOut = () => {
        router.push('/').then(() => {
            tokenModifier({ action: 'remove' })
            dispatch(openDrawer(false))
        })
    }

    const onEditProfile = () => {
        dispatch(openDrawer(false))
        dispatch(openEditProfileModal(true))
    }

    return (
        <nav className="header__navigation-items">
            <div
                role="button"
                onKeyDown={onEditProfile}
                onClick={() => onEditProfile()}
                tabIndex={0}
                className="button"
            >
                <p>Edit My Profile</p>
            </div>
            <div
                role="button"
                onKeyDown={onSignOut}
                onClick={() => onSignOut()}
                tabIndex={0}
                className="button"
            >
                <p>Logout</p>
            </div>
        </nav>
    )
}
