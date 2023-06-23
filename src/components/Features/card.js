import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

export const Card = ({ icon, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Transition
      show={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
        <Transition
          show={isLoading}
          enter="transition-opacity duration-500"
          enterFrom="opacity-100"
          enterTo="opacity-0"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-0"
          leaveTo="opacity-100"
        >
          <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full" />
        </Transition>
        <Transition
          show={!isLoading}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
            {icon}
          </span>
        </Transition>
        <Transition
          show={!isLoading}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
            {title}
          </h1>
        </Transition>
        <Transition
          show={!isLoading}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <p className="text-gray-500 dark:text-gray-300">{description}</p>
        </Transition>
      </div>
    </Transition>
  );
};
