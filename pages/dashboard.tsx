import React from 'react'
import Head from 'next/head'
import { Administration } from '../src/components/administration/Administration'

export default function Dashboard(): React.ReactNode {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Administration />
            </main>
        </div>
    )
}
