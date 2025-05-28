import React, { useEffect, useState } from "react";
import { AaronLogo, AaronLogoBlack } from "../assets";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineYoutube } from "react-icons/ai";

const SocialLinks = [
  {
    icon: <FaFacebookF />,
    link: `https://www.facebook.com/aaronelevatorsindia/`,
  },
  {
    icon: <FaInstagram />,
    link: `https://www.instagram.com/aaron_elevators/`,
  },
  {
    icon: <FaWhatsapp />,
    link: `https://wa.me/+919995689519`,
  },
  {
    icon: <AiOutlineYoutube />,
    link: `https://www.youtube.com/@aaronelevatorskerala`,
  },
];

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      if (scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/"); // Navigate to home
    setTimeout(() => {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the page loads first
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* <div
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6  ${visible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        style={{ zIndex: 100 }}
      >
        <div
          className="relative"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "0px solid #ddd",
            background: `conic-gradient(#efb13b ${scrollProgress}%, transparent ${scrollProgress}%)`,
          }}
        >
          <button
            onClick={scrollToTop}
            className="absolute top-0 left-0 right-0 bottom-0 mx-auto my-auto w-[35px] h-[35px] bg-[#00000082] backdrop-blur-md text-white rounded-full flex items-center justify-center"
          >
            <MdOutlineKeyboardDoubleArrowUp className=" text-xl" />
          </button>
        </div>
      </div> */}

      {/* WhatsApp Floating Icon */}
      {/* <a
        href="https://wa.me/919876543210" // Replace with your actual number
        className="fixed bottom-10 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a> */}
      <footer className="  z-[1001] bg-white">
        <div className="w-full py-10 grid grid-cols-1  md:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-10 gap-x-40">
          <div className="flex flex-col items-center justify-center text-center gap-3  ">
            <img
              className="h-16 w-28 md:h-16 md:w-32 object-contain"
              src={AaronLogo}
              alt=""
            />

          </div>
          <div className=" flex flex-col items-center">
            <h4 className="font-semibold text-xl xl:text-xl tracking-widest capitalize mb-3  text-mainbtn ">
              Quick links
            </h4>
            <div className="text-sm tracking-wider flex flex-col gap-1  ">
              <Link className="hover:text-mainbtn" to="/">Home</Link>
              <Link className="hover:text-mainbtn" to="/about-us">About Us</Link>
              <Link className="hover:text-mainbtn" to='/products'>Products</Link> {/* Button instead of Link */}
              <Link className="hover:text-mainbtn" to="/contact-us">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-center md:pr-20 gap-1  text-center md:text-start ">
            <h4 className="font-semibold text-xl tracking-widest capitalize mb-3 text-mainbtn">
              Address
            </h4>

            <div className="flex gap-3 items-center md:w-full">
              <div className="text-lg  hidden md:block">
                <FaMapMarkerAlt size={20}  />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/oRXLe5XYxuJBTcFa8"
                className="text-sm hover:text-mainbtn "
              >
                No:48/376, Second floor, Gold Souk Grande Mall,<br />
                Ponnurunni, Vyttila, Kochi, Ernakulam, Kerala 682019
              </a>
            </div>
            <div className="flex gap-3 items-center  md:w-full">
              <div className="text-lg">
                <FaPhone size={20} />
              </div>
              <a href="tel:+917592056788" className="hover:text-mainbtn">
                +91 7592056788
              </a>
            </div>
            <div className="flex gap-3 items-center md:w-full">
              <div className="text-xl">
                <IoIosMail size={20} />
              </div>
              <a href="mailto:info@aaronelevators.in" className="hover:text-mainbtn">
                info@aaronelevators.in
              </a>
            </div>
          </div>
        </div>
        <div className="w-11/12 xl:w-10/12 py-5  border-t-2  border-[#ffffff43] mx-auto text-sm font-extralight  flex flex-col items-center md:items-start gap-y-5 justify-between md:flex-row gap-1">
          <div className="flex gap-1 text-xs md:text-sm ">
            <p>© 2025 Aaronelevators |</p>
            <a
              href="https://dostudio.co.in"
              className="hover:text-mainbtn"
              target="_blank"
            >
              Powered DO Studio
            </a>
          </div>
          <div className="flex gap-5 text-xl ">
            {SocialLinks?.map((dt, i) => (
              <a href={dt.link} target="_blank" className=" hover:-translate-y-1 duration-200 hover:text-mainbtn" key={i}>
                {dt.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
