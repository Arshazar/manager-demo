import React from 'react'
import App from 'next/app'
import { CustomApp } from '../src/containers/CustomApp'
import { Provider } from 'react-redux'
import { withReduxStore } from '../src/redux/with-redux-store'
import { CustomAppProps } from '../src/types/redux.types'

import '../src/styles/main.scss'

class MyApp extends App<CustomAppProps> {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <CustomApp Component={Component} pageProps={pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(MyApp)
