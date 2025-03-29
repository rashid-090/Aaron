import React, { useState, useEffect } from "react";
import { AaronLogo } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import AllProducts from '../components/modalsdata';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { name: "home", link: "/" },
    { name: "about", link: "/about-us" },
    { name: "products", link: "/products" },
    { name: "contact us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = () => {
    setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-[96%] mx-auto left-[50%] -translate-x-[50%] z-[999] transition-all duration-300 xl:py-1 rounded-lg ${
        isScrolled
          ? "bg-white backdrop-blur-md top-3 shadow-lg"
          : "bg-[#ffffff] backdrop-blur-md top-6"
      }`}
    >
      <div className="px-3 py-2 flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="h-10 w-28 md:h-12 md:w-32 rounded-lg object-contain"
            src={AaronLogo}
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-16">
          <ul className="flex gap-10 text-sm tracking-wider font-light text-black">
            {menus.map((menu, index) => (
              <li
                key={index}
                className={`relative group hover:cursor-pointer py-4 hover:text-mainbtn ${
                  isActive(menu.link) ? "text-mainbtn" : ""
                } duration-100 flex items-center`}
                // THIS IS THE KEY CHANGE: Always navigate on click, even for "Products"
                onClick={() => navigate(menu.link)}
                onMouseEnter={() =>
                  menu.name.toLowerCase() === "products" &&
                  setIsDropdownVisible(true)
                }
                onMouseLeave={() =>
                  menu.name.toLowerCase() === "products" &&
                  setIsDropdownVisible(false)
                }
              >
                <span className="flex items-center">
                  {menu.name
                    .toLowerCase()
                    .replace(/^./, (firstChar) => firstChar.toUpperCase())}
                  {menu.name.toLowerCase() === "products" && (
                    <span
                      className={`ml-1 text-xl text-gray-500 group-hover:text-mainbtn transition-transform duration-300 ${
                        isDropdownVisible ? "rotate-180" : ""
                      }`}
                    >
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </span>

                {/* Dropdown for Products */}
                {menu.name.toLowerCase() === "products" && (
                  <ul
                    className={`absolute top-12 left-0 bg-white shadow-md menus rounded-md py-2 w-60 overflow-y-scroll transition-all duration-500 ease-in-out ${
                      isDropdownVisible
                        ? "max-h-80 opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"
                    }`}
                  >
                    {Array.isArray(AllProducts) && AllProducts.map((product, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-mainbtn text-black cursor-pointer capitalize"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent parent click from firing
                          // Navigate to product detail page using the format from your original code
                          navigate(`/products/${product.id}/${product.id}`);
                          setIsDropdownVisible(false);
                        }}
                      >
                        {product.pageHeader?.title || product.name || `Product ${i+1}`}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button className="bg-mainbtn border-2 border-mainbtn text-white hover:text-white rounded-lg duration-150 px-3 text-sm py-2">
            <a target="_blank" href="https://wa.me/+919995689519">CHAT NOW</a>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-mainbtn focus:outline-none"
          >
            {isMobileMenuOpen ? <IoIosClose /> : <HiOutlineMenuAlt1 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md rounded-md py-4 px-3">
          <ul className="flex flex-col gap-4 text-sm tracking-wider font-light text-black">
            {menus.map((menu, index) => (
              <li key={index} className="cursor-pointer">
                {menu.name.toLowerCase() === "products" ? (
                  <div>
                    {/* Dropdown Toggle - Navigate AND toggle submenu */}
                    <div
                      className="flex justify-between items-center"
                      onClick={() => {
                        navigate(menu.link); // Navigate to products page
                        toggleMobileSubmenu(); // Also toggle the submenu
                      }}
                    >
                      <span>{menu.name.toLowerCase().replace(/^./, (firstChar) => firstChar.toUpperCase())}</span>
                      <span>{isMobileSubmenuOpen ? "-" : "+"}</span>
                    </div>
                    {/* Submenu Items */}
                    <div
                      className={`overflow-y-scroll transition-[max-height] duration-300 ease-in-out ${
                        isMobileSubmenuOpen ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      <ul className="ml-4 mt-2">
                        {Array.isArray(AllProducts) && AllProducts.map((product, i) => (
                          <li
                            key={i}
                            className="py-3 w-full hover:bg-gray-100 hover:text-mainbtn cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent parent from firing
                              navigate(`/products/${product.id}/${product.id}`);
                              setIsMobileMenuOpen(false);
                              setIsMobileSubmenuOpen(false);
                            }}
                          >
                            {product.pageHeader?.title || product.name || `Product ${i+1}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  // Non-dropdown menu items
                  <div
                    onClick={() => {
                      navigate(menu.link);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {menu.name
                      .toLowerCase()
                      .replace(/^./, (firstChar) => firstChar.toUpperCase())}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;