import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";

export const NavDrop = ({ links, dropdownName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownOpen && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <div ref={dropdownRef} className="relative navDrop" style={{ zIndex: dropdownOpen ? 999 : "auto" }}>
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        <span>{dropdownName}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform  ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div className="px-2 py-2 bg-white dark:bg-gray-800 rounded-md shadow">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.url}
                className={({ isActive }) =>
                  clsx(
                    "block px-4 py-2 mt-2 text-sm font-semibold rounded-lg  md:mt-0focus:outline-none focus:shadow-outline",
                    {
                      "hover:text-gray-900": !isActive,
                      "focus:text-gray-900": !isActive,
                      "hover:bg-gray-200": !isActive,
                      "focus:bg-gray-200": !isActive,
                      "focus:outline-none": !isActive,
                      "focus:shadow-outline": !isActive,
                      "bg-gray-200": isActive,
                      "text-gray-900": isActive,
                    }
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
