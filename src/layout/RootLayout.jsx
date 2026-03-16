import React from 'react'
import Navbar from '../share/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout