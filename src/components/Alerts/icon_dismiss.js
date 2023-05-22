import React from "react";

import { FiAlertTriangle, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

export const Sucess = ({Title, Text}) => {
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

export const Error = ({Title, Text}) => {
  return (
    <div className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-red-500">
     <FiAlertCircle className="w-8 h-8 text-red-500"/>
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
