import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHackerrank } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-[#124E66] text-white pt-12 pb-6 px-4 md:px-20 overflow-hidden">
      {/* Animated Background that follows mouse */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none transition-transform duration-300"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}>
        <img
          src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
          alt="animated coder"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 hover:text-amber-300 transition">
              <FaGithub />
              <a
                href="https://github.com/navandarnidhi"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-300 transition">
              <FaLinkedin />
              <a
                href="https://linkedin.com/in/nidhi-navandar"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-300 transition">
              <FaWhatsapp />
              <a
                href="https://wa.me/917977565476"
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-300 transition">
              <MdEmail />
              <a href="mailto:navandarnidhi@gmail.com">Gmail</a>
            </li>
            <li className="flex items-center gap-3 hover:text-amber-300 transition">
              <FaHackerrank />
              <a
                href="https://www.hackerrank.com/profile/navandarnidhi"
                target="_blank"
                rel="noopener noreferrer">
                HackerRank
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-amber-300 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-amber-300 transition">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-amber-300 transition">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="hover:text-amber-300 transition">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-amber-300 transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 text-center mt-10 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Nidhi Navandar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
