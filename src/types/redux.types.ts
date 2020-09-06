import { AppProps } from 'next/app'
import { FilterType } from './modals.types'
import { AdminType } from './admin.types'

export type CustomAppProps = {
    Component: AppProps['Component']
    pageProps: AppProps['pageProps']
    reduxStore?: ObjectType
}

export type ObjectType = Record<string, unknown>

export type NextStateType = AdminType | string | boolean | FilterType | null
