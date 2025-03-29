import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ to, icon: Icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to); // Check if pathname starts with `to`
    return (
        <li>
            <Link
                to={to}
                className={`flex items-center p-3 rounded-lg transition-all hover:bg-mainbtnhrv duration-200 ${isActive
                    ? "!bg-mainbtn text-white"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
            >
                <Icon className="mr-3" size={20} />
                <span className="font-medium capitalize">{children}</span>
            </Link>
        </li>
    )
}

export default SidebarItem
