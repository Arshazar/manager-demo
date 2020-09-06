import React from 'react'
import Head from 'next/head'
import { Login } from '../src/components/login/Login'

export default function Home(): React.ReactNode {
    return (
        <div>
            <Head>
                <title>Manager Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Login />
            </main>
        </div>
    )
}
