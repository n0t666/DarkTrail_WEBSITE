import React, { useState } from "react";
import { NavDrop } from "./navbarElements";
import { NavLink, Link } from "react-router-dom";
import { clsx } from "clsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  //Related to the navigation menu itself, this is just used for navigation in mobile devices
  const toggleMenu = () => {
    setOpen(!open);
  };

  ////////////////////////////////

  const dropdownLinks = [
    { label: "Google", url: "https://www.google.com" },
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Twitter", url: "https://www.twitter.com" },
  ];

  return (
    <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
        <Link
      to="/"
      className="text-lg font-semibold tracking-widest uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline relative inline-block"
    >
      <span className="z-10 relative transition duration-300 group font-fipps">
        <span className="relative">Dark</span>
        <span className="absolute top-0 right-0 w-1/2 h-full bg-red-500 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-300"></span>
        <span className="relative text-black">Trail</span>
      </span>
    </Link>

          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                style={{ display: !open ? "block" : "none" }}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                style={{ display: open ? "block" : "none" }}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 ${
            open ? "flex" : "hidden"
          } md:flex md:justify-end md:flex-row`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                isActive ? "bg-gray-200" : "text-gray-900"
              )
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                isActive ? "bg-gray-200" : "text-gray-900"
              )
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                isActive ? "bg-gray-200" : "text-gray-900"
              )
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                isActive ? "bg-gray-200" : "text-gray-900"
              )
            }
          >
            Blog
          </NavLink>
          <NavDrop links={dropdownLinks} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
