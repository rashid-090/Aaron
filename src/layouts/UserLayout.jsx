import React, { useEffect, useState } from 'react'
import { Footer, Header } from '../components'
import { ScrollToTop } from 'react-router-scroll-to-top'
import { Outlet } from 'react-router-dom'
import Header2 from '../components/Header2'
import { FaWhatsapp } from 'react-icons/fa'
import PopupForm from '../components/PopupForm'
import FloatingBar from '../components/FloatingBar'

const UserLayout = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000); // Show popup after 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [])

    const handlePopupClose = () => {
        setShowPopup(false);
    };



    return (
        <div className="app overflow-hidden 2xl:max-w-[2500px] mx-auto min-h-screen flex flex-col justify-between">
            {/* <Header /> */}
            {
                showPopup && (
                    <PopupForm handlePopupClose={handlePopupClose} />
                )
            }
            <Header2 />
            <ScrollToTop />
            <Outlet />
            <FloatingBar />


            <Footer />
        </div>
    )
}

export default UserLayout
