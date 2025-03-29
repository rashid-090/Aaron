import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPerson, MdArrowDropDown, MdExitToApp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";

const Navbar = () => {

  const { user } = useSelector((state) => state.user)

  const navigate = useNavigate()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/')
    dispatch(logout());
    setIsDropdownOpen(!isDropdownOpen);

  };
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl flex justify-end mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden p-4 sm:ml-6 lg:flex sm:items-center">
          <div className="ml-3 relative">
            <div className="flex justify-end">
              <button
                onClick={toggleDropdown}
                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none a"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <MdPerson className="h-8 w-8 rounded-full text-mainbtn" />
                <span className="ml-2 text-gray-700">{user?.firstName}</span>
                <MdArrowDropDown className="ml-1 text-gray-400" />
              </button>
            </div>
            {isDropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  <MdExitToApp className="inline-block mr-2" /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
