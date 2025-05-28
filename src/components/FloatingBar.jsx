import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";

const FloatingBar = () => {

    const [isChatReady, setIsChatReady] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (
                window.HubSpotConversations &&
                window.HubSpotConversations.widget &&
                typeof window.HubSpotConversations.widget.open === "function"
            ) {
                setIsChatReady(true);
                clearInterval(interval);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const openHubspotChat = () => {
        if (isChatReady) {
            window.HubSpotConversations.widget.open();
        } else {
           
        }
    };


    return (
        <div className="fixed w-[90%] md:w-fit bottom-5 left-1/2 -translate-x-1/2 z-[1000] bg-white shadow-lg rounded-full px-4 py-2 flex justify-around items-center gap-10 border">
            <a href="tel:+917592056788">
                <div className="bg-gray-700 hover:bg-mainbtn duration-150   text-white p-2 rounded-full">
                    <FaPhoneAlt />
                </div>
            </a>
            <a href="mailto:info@aaronelevators.in" target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-700 text-white p-2  duration-150 rounded-full">
                    <MdOutlineMail  />
                </div>
            </a>
            <a href="https://wa.me/+917592056788" target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-700 hover:bg-[#21c063] duration-150  text-white p-2 rounded-full">
                    <FaWhatsapp />
                </div>
            </a>
            <button onClick={openHubspotChat}>
                <div className="bg-gray-700 text-white p-2  duration-150 rounded-full">
                    <BsChatDotsFill />
                </div>
            </button>
        </div>
    );
};

export default FloatingBar;
