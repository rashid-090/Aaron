import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AaronLogoBlack, AaronLogo, AaronLogoYellowWhite } from "../assets";
import AllProducts from './modalsdata';

import { TbMenu } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";


const TankStyleNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Determine correct logo and icon color based on scroll and route
  const showBlackLogo = isHomePage || isScrolled;
  const logoToUse = showBlackLogo ? AaronLogoYellowWhite : AaronLogoYellowWhite;
  const iconColor = showBlackLogo ? "text-white" : "text-black";

  const menus = [
    { name: "home", link: "/" },
    { name: "about", link: "/about-us" },
    {
      name: "products",
      link: "/products",
      submenu: AllProducts.map(product => ({
        name: product.pageHeader?.title || product.name || "Product",
        link: `/products/${product.id}/${product.id}`
      }))
    },
    { name: "contact us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  const handleNavigate = (link) => {
    navigate(link); // Trigger navigation
    setTimeout(closeMenu, 300); // Close the menu after a short delay
  };



  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed w-full z-[900] transition-all duration-500 ${isScrolled ? "bg-maingray backdrop-blur-md py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-2 grid  grid-cols-2 md:grid-cols-3 place-items-center">
          <div className="md:flex justify-start w-full hidden  ">
            {/* Menu Button for All Sizes */}
            <button onClick={toggleMenu} className="z-50 focus:outline-none  ">
              <motion.div
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <IoClose className={`w-8 h-8 ${iconColor}`} />
                ) : (
                  <TbMenu className={`w-8 h-8 ${iconColor}`} />
                )}
              </motion.div>
            </button>
          </div>
          <div className="flex justify-start md:justify-center w-full">
            {/* Logo */}
            <Link to="/" className="z-50">
              <img
                src={logoToUse}
                alt="Logo"
                className="h-10 w-28 md:h-12 md:w-32 object-contain"
              />

            </Link>
          </div>
          <div className="flex justify-end w-full">
            <a
              href="tel:+917592056788"
              className="w-fit text-white  md:text-xs font-medium text-[10px] px-3 md:px-6 p-2 md:py-2 relative z-10 hidden md:flex items-center gap-1"
            >
              <FaPhoneAlt className="text-sm" />
              +91 7592056788
            </a>
            <a
              href="tel:+917592056788"
              className="animated-border-button w-fit text-black hover:!bg-maingray md:text-xs font-medium text-[10px] px-3 md:px-6 p-2 md:py-2 relative z-10 bg-white flex items-center gap-1"
            >
              {/* <FaPhoneAlt className="text-sm" /> */}
              Get A Quote
            </a>
          </div>









        </div>
      </nav>

      {/* Mobile-Style Menu (used for all screens now) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0  bg-maingray flex flex-col items-center justify-center z-[950]"
          >
            <div className="max-h-screen overflow-y-auto custom-scrollbar flex flex-col items-center justify-center py-0 px-6">
              {/* Logo Top-Left */}
              <Link to="/" className="absolute top-6 left-6 z-50">
                <img
                  src={AaronLogoYellowWhite}
                  alt="Logo"
                  className="h-10 w-28 object-contain"
                />
              </Link>
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white z-50"
                onClick={closeMenu}
              >
                <IoClose className="w-8 h-8" />
              </button>

              {/* Menu Items */}
              <motion.ul className="flex max-h-[80vh] w-80 flex-col space-y-8 mt-10">
                {menus.map((menu, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="border-b border-white/10 pb-4"
                  >
                    {menu.submenu ? (
                      <>
                        <div
                          className="flex justify-center items-center text-white uppercase text-3xl tracking-wider cursor-pointer"
                          onClick={() => toggleSubmenu(index)}
                        >
                          <span>{menu.name}</span>
                          <motion.span
                            animate={{ rotate: activeSubmenu === index ? 45 : 0 }}
                            className="text-3xl pl-4"
                          >
                            +
                          </motion.span>
                        </div>

                        <AnimatePresence>
                          {activeSubmenu === index && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 mt-4 text-center space-y-4 overflow-hidden"
                            >
                              {menu.submenu.map((subItem, subIndex) => (
                                <motion.li
                                  key={subIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                  className=" text-white/80 text-lg hover:text-primary cursor-pointer capitalize"
                                  onClick={() => handleNavigate(subItem.link)} // Use handleNavigate here
                                >
                                  {subItem.name}
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <div
                        className="text-white text-center duration-500 uppercase text-3xl tracking-wider cursor-pointer"
                        onClick={() => handleNavigate(menu.link)} // Use handleNavigate here
                      >
                        {menu.name}
                      </div>
                    )}
                  </motion.li>
                ))}

              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default TankStyleNavbar;