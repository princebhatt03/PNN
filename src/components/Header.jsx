import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHackerrank } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Skills', path: '/skills' },
    { label: 'Project', path: '/project' },
  ];

  const handleNav = path => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#124E66] text-white border-b shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        {/* Left Side Icons */}
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

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNav(link.path)}
              className="hover:text-[#D3D9D4] transition-colors">
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-[#D3D9D4]/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Offcanvas - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#124E66] text-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4 border-b border-[#748D92]">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X
              size={24}
              className="text-white"
            />
          </button>
        </div>
        <div className="p-4 flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNav(link.path)}
              className="hover:text-[#D3D9D4] text-left transition-colors">
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
