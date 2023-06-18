import { useEffect, useState } from 'react';
import { ImInstagram, ImTwitter, ImGithub, ImLinkedin } from 'react-icons/im';


const navigation = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/playfulscapeco/',
    icon: ImInstagram
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/PlayfulscapeDev',
    icon: ImTwitter
  },
  {
    name: 'GitHub',
    href: 'https://github.com/n0t666',
    icon: ImGithub
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/leandro-pereira-186596277/',
    icon: ImLinkedin
  },
];

export default function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full md:w-1/2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 shadow dark:text-gray-200 text-gray-700 rounded-t-lg py-4 px-6 p-4">
      <div className={`container mx-auto ${screenWidth < 640 ? "flex justify-center" : "flex justify-between"} items-center`}>
        {screenWidth >= 640 ? (
          <span className="text-sm flex-shrink-0 whitespace-nowrap">&copy; 2023 DarkTrail. All rights reserved.</span>
        ) : null}
        <div className="flex items-center gap-4 flex-shrink-0">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:hover:text-white hover:text-black transition-colors duration-300"
            >
              <item.icon className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}


