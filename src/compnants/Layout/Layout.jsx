import React from 'react'
import Navber from '../Navber/Navber'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return <>
        <Navber />
        <Outlet>

        </Outlet>
        <Footer />
    </>
}
