import React from 'react';
import { ImInstagram, ImTwitter, ImGithub, ImLinkedin } from 'react-icons/im';

const navigation = [
  {
    name: 'Instagram',
    href: '#',
    icon: ImInstagram
  },
  {
    name: 'Twitter',
    href: '#',
    icon: ImTwitter
  },
  {
    name: 'GitHub',
    href: '#',
    icon: ImGithub
  },
  {
    name: 'Linkedin',
    href: '#',
    icon: ImLinkedin
  },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full sm:w-1/2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 shadow dark:text-gray-200 text-gray-700 rounded-t-lg py-4 px-6 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-sm">&copy; 2023 DarkTrail. All rights reserved.</span>
        <div className="flex items-center gap-4">
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
