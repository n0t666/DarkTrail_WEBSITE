import { useState } from 'react';
import { Transition } from '@headlessui/react';

import {
  FiAlertTriangle,
  FiAlertCircle,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

export const Sucess = ({ Title, Text }) => {
  return (
    <div className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500">
      <FiCheckCircle className="w-8 h-8 text-green-500" />
      <div className="ml-3">
        <div className="font-bold text-left text-black dark:text-gray-50">
          {Title}
        </div>
        <div className="w-full text-gray-900 dark:text-gray-300 mt-1">
          {Text}
        </div>
      </div>
    </div>
  );
};

export const Error = ({ Title, Text }) => {
  return (
    <div className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500">
      <FiAlertCircle className="w-8 h-8 text-red-500" />
      <div className="ml-3">
        <div className="font-bold text-left text-black dark:text-gray-50">
          {Title}
        </div>
        <div className="w-full text-gray-900 dark:text-gray-300 mt-1">
          {Text}
        </div>
      </div>
    </div>
  );
};

export const Warning = ({ Title, Text }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };


  return (
    <Transition
    show={!isClosed}
    enter="transition-all ease-in-out duration-500 delay-[200ms]"
    enterFrom="opacity-0 translate-y-6"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-yellow-500">
      <FiAlertTriangle className="w-8 h-8 text-yellow-500" />
      <div className="ml-3 flex-1">
        <div className="flex items-center justify-between">
          <div className="font-bold text-left text-black dark:text-gray-50">
            {Title}
          </div>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none transform transition-transform duration-300"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full text-gray-900 dark:text-gray-300 mt-1">
          {Text}
        </div>
      </div>
    </div>
  </Transition>
  );
};
