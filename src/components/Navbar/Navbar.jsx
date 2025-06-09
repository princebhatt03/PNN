import React, { useState } from 'react';
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
    { label: 'Skills', path: '/skills' },
    { label: 'Project', path: '/project' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigate = path => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="shadow-md bg-[#f0f4ff] w-full fixed text-[#002057] duration-200 z-40">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Left side: Social Icons + Hamburger on mobile */}
        <div className="flex items-center w-full justify-between space-x-4">
          {/* Hamburger on mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 flex items-center justify-center text-[#002057] hover:text-[#FF7B00] transition">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4  items-center ">
            <a
              href="https://github.com/navandarnidhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002057] hover:text-[#FF7B00] transition"
              aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nidhi-navandar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002057] hover:text-[#FF7B00] transition"
              aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://wa.me/917977565476"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002057] hover:text-[#FF7B00] transition"
              aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
            <a
              href="mailto:navandarnidhi@gmail.com"
              className="text-[#002057] hover:text-[#FF7B00] transition"
              aria-label="Email">
              <MdEmail size={22} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/navandarnidhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002057] hover:text-[#FF7B00] transition"
              aria-label="HackerRank">
              <FaHackerrank size={22} />
            </a>
          </div>
        </div>

        {/* Right side: Nav Links on desktop */}
        <ul className="hidden sm:flex gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigate(link.path)}
                className="text-md font-medium text-[#002057] hover:text-[#FF7B00] duration-200">
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu - shown below navbar when hamburger is open */}
      {isOpen && (
        <div className="sm:hidden bg-[#FF7B00]/10 px-6 pb-6 rounded-b-md">
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigate(link.path)}
                  className="text-lg font-semibold text-[#002057] hover:text-[#FF7B00] duration-200 w-full">
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
