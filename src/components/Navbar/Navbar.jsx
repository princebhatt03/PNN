import React, { useState } from 'react';
import DarkMode from './DarkMode';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHackerrank } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Skills', path: '/skills' },
    { label: 'Project', path: '/project' },
  ];

  const handleNavigate = path => {
    navigate(path);
    setIsOpen(false); // close mobile menu on click
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4 items-center">
            <a
              href="https://github.com/navandarnidhi"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub
                size={22}
                className="hover:text-[#D3D9D4] transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nidhi-navandar/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin
                size={22}
                className="hover:text-[#D3D9D4] transition"
              />
            </a>
            <a
              href="https://wa.me/917977565476"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp
                size={20}
                className="hover:text-[#D3D9D4] transition"
              />
            </a>
            <a href="mailto:navandarnidhi@gmail.com">
              <MdEmail
                size={22}
                className="hover:text-[#D3D9D4] transition"
              />
            </a>
            <a
              href="https://www.hackerrank.com/profile/navandarnidhi"
              target="_blank"
              rel="noopener noreferrer">
              <FaHackerrank
                size={22}
                className="hover:text-[#D3D9D4] transition"
              />
            </a>
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      {/* Lower Navbar */}
      <div className="flex justify-center py-2 relative items-center px-4">
        {/* Desktop Menu */}
        <ul className="sm:flex hidden items-center gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigate(link.path)}
                className="text-md font-medium hover:text-primary duration-200">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - Mobile Only */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 flex items-center justify-center">
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-primary/20 dark:bg-gray-800 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigate(link.path)}
                  className="text-lg font-semibold hover:text-primary duration-200 w-full">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
