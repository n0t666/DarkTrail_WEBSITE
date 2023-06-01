import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { clsx } from "clsx";


import Switcher from "./Switcher";
import { Tooltip } from 'react-tooltip'
import { NavDrop } from "./navbarElements";

import { FaNewspaper } from 'react-icons/fa';
import {MdOutlineHome}  from 'react-icons/md';
import {IoInformationCircleOutline} from 'react-icons/io5';
import { HiOutlineSparkles } from 'react-icons/hi';
import {RiGalleryLine} from 'react-icons/ri';
import {MdVideoLibrary} from 'react-icons/md';

const links = [
  { label: "FAQs", url: "/FAQ" },
  { label: "Contactos", url: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 1280);

  //Related to the navigation menu itself, this is just used for navigation in mobile devices
  const toggleMenu = () => {
    setOpen(!open);
  };

  ////////////////////////////////

    // Update isMobileScreen state on screen size change
    useEffect(() => {
      const handleResize = () => {
        setIsMobileScreen(window.innerWidth <= 1280);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    ////////////////////////////////

  return (
    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto xl:items-center xl:justify-between xl:flex-row xl:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link
            to="/"
            className="text-lg font-semibold tracking-widest uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline relative inline-block"
          >
                         <span className="z-10 relative transition duration-300 group font-fipps">
              <span className="relative">Dark</span>
              <span className="mt-1 absolute top-0 right-0 w-1/2 h-full bg-red-500 transform -skew-x-12 transition-transform duration-300 group-hover:skew-x-0"></span>
              <span className="relative text-black">
                <span className="group-hover:animate-pulse">T</span>rail
              </span>
            </span>
          </Link>
          <button
            className="xl:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={toggleMenu}
          >
            <div className="flex items-center">
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
            </div>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 xl:pb-0 ${
            open ? "flex" : "hidden"
          } xl:flex xl:justify-end xl:flex-row`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx("px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0", {
                "hover:text-gray-900": !isActive,
                "focus:text-gray-900": !isActive,
                "hover:bg-gray-200": !isActive,
                "focus:bg-gray-200": !isActive,
                "focus:outline-none": !isActive,
                "focus:shadow-outline": !isActive,
                "bg-gray-200": isActive,
                "text-gray-900": isActive,
              })
            }
          >
            <MdOutlineHome className="inline-block mr-2" />Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx("px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0", {
                "hover:text-gray-900": !isActive,
                "focus:text-gray-900": !isActive,
                "hover:bg-gray-200": !isActive,
                "focus:bg-gray-200": !isActive,
                "focus:outline-none": !isActive,
                "focus:shadow-outline": !isActive,
                "bg-gray-200": isActive,
                "text-gray-900": isActive,
              })
            }
          >
            <IoInformationCircleOutline className="inline-block mr-2" />Sobre o jogo
          </NavLink>
          <NavLink
            to="/features"
            className={({ isActive }) =>
              clsx("px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0", {
                "hover:text-gray-900": !isActive,
                "focus:text-gray-900": !isActive,
                "hover:bg-gray-200": !isActive,
                "focus:bg-gray-200": !isActive,
                "focus:outline-none": !isActive,
                "focus:shadow-outline": !isActive,
                "bg-gray-200": isActive,
                "text-gray-900": isActive,
              })
            }
          >
              <HiOutlineSparkles className="inline-block mr-2" />Funcionalidades
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0 ml-0",
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
             <RiGalleryLine className="inline-block mr-2" />Galeria
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0 ml-0",
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
             <MdVideoLibrary className="inline-block mr-2" />Vídeos
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              clsx(
                "px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0 ml-0",
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
            <FaNewspaper className="inline-block mr-2" />Notícias
          </NavLink>
          <NavDrop links={links} dropdownName={"Ajuda"}/>
          {isMobileScreen&& (
          <div className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg xl:mt-0 ml-0 flex items-center">
          <span className="mr-2">Ativar modo escuro:</span>
          {isMobileScreen && <Switcher/>} 
          </div>
           )}
           <div className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 ml-0 flex items-center" data-tooltip-id="dark-tooltip" data-tooltip-content="Ligar/Desligar modo escuro">
          {!isMobileScreen && <Switcher/>}
          </div>
        </nav>
        {!isMobileScreen&& (
        <Tooltip id="dark-tooltip" place="bottom" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
