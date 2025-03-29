import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    MdDashboard,
    MdAddCircle,
    MdList,
    MdExitToApp,
    MdPerson,
    MdArrowDropDown,
} from "react-icons/md";
import { AaronLogo } from "../../assets";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import SidebarItem from "./SidebarItem";




export const Sidebar = () => {

    const dispatch = useDispatch();

    const menus = [
        { name: "dashboard", url: "/admin", icon: MdAddCircle },
        { name: "add category", url: "/admin/add-category", icon: MdAddCircle },
        { name: "categories", url: "/admin/categories", icon: MdAddCircle },
        { name: "add model", url: "/admin/add-model", icon: MdAddCircle },
        { name: "models", url: "/admin/models", icon: MdAddCircle },
    ]

    // Accept handleLogout as a prop
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogout = (e) => {
        e.preventDefault()
        navigate("/");
        dispatch(logout());
        setIsDropdownOpen(false); // Close the dropdown after logging out

    };
    const username = "Admin";
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className=" p-4">
            <div className="p-2 pb-5">
                <Link to="/">
                    <img className="h-10 object-cover" src={AaronLogo} alt="Logo" />
                </Link>
            </div>
            <ul className="space-y-2">
                {
                    menus?.map((menu, i) => (
                        <SidebarItem key={i} to={menu.url} icon={menu.icon}>
                            {menu.name}
                        </SidebarItem>
                    ))
                }

                <div className="ml-3 relative block lg:hidden">
                    <div className="flex ">
                        <button
                            onClick={toggleDropdown}
                            className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span className="sr-only">Open user menu</span>
                            <MdPerson className="h-8 w-8 rounded-full text-[#00a39a]" />
                            <span className="ml-2 text-gray-700">{username}</span>
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
            </ul>
        </nav>
    );
};
