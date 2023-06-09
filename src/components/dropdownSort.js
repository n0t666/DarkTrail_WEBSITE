import { Fragment , useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {FaSortUp,FaSortDown} from "react-icons/fa";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeadlessMenu({ onSortingOptionChange,sortOrder}) {
  const [activeOption, setActiveOption] = useState(null);
  const handleOptionClick = (selectedOption) => {
    onSortingOptionChange(selectedOption);
    setActiveOption(selectedOption);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
      <Menu.Button className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 dark:focus:ring-transparent">
          Ordenar
          {sortOrder === "asc" ? (
            <FaSortUp className="ml-2 h-4 w-4 text-gray-500" />
          ) : (
            <FaSortDown className="ml-2 h-4 w-4 text-gray-500" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleOptionClick("Option 1")}
                  className={classNames(
                    active || activeOption === "Option 1"
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                      : "text-gray-700 dark:text-gray-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Mais recentes
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleOptionClick("Option 2")}
                  className={classNames(
                    active || activeOption === "Option 2"
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                      : "text-gray-700 dark:text-gray-200",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Ordem alfabética
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
