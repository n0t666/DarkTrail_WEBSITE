import React, { useState, useEffect } from 'react';

const Toast = ({ text, icon, color, duration = 5000 }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, duration]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Return null to remove the toast from the DOM
  }

  return (
    <div
      className={`fixed top-20 right-0 p-4 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transition: 'opacity 0.3s ease-out', // Add transition property for fade-out animation
      }}
    >
      <div
        id="toast-default"
        className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${color}-500 bg-${color}-100 rounded-lg dark:bg-${color}-800 dark:text-${color}-200`}
        >
          {icon}
        </div>
        <div className="ml-3 text-sm font-normal">{text}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
          onClick={handleClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
