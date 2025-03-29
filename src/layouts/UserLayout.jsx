import React from 'react'
import { Footer, Header } from '../components'
import { ScrollToTop } from 'react-router-scroll-to-top'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div className="app  w-[98%] my-3  overflow-hidden 2xl:max-w-[2500px] mx-auto min-h-screen flex flex-col justify-between">
            <Header />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout