import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  return (
    <Transition
      show={showButton}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-4 right-4 z-50 md:mb-0 mb-16">
        <button
          className={`bg-blue-500 rounded-full p-3 shadow-lg outline-none focus:outline-none text-white transition duration-300 ease-in-out hover:bg-blue-600 ${showButton ? 'dark:bg-gray-800' : 'dark:bg-gray-200'}`}
          onClick={handleScrollToTop}
        >
          <FaArrowCircleUp size={30} className={showButton ? 'text-white' : 'text-gray-800'} />
        </button>
      </div>
    </Transition>
  );
};

export default ScrollToTopButton;
