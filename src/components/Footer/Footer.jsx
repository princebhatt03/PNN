import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHackerrank } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    href: 'https://github.com/navandarnidhi',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin size={24} />,
    href: 'https://linkedin.com/in/nidhi-navandar',
    label: 'LinkedIn',
  },
  {
    icon: <FaWhatsapp size={24} />,
    href: 'https://wa.me/917977565476',
    label: 'WhatsApp',
  },
  {
    icon: <FaHackerrank size={24} />,
    href: 'https://www.hackerrank.com/profile/navandarnidhi',
    label: 'HackerRank',
  },
  {
    icon: <MdEmail size={24} />,
    href: 'mailto:navandarnidhi@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f0f4ff] dark:bg-gray-900 text-[#011AFF] dark:text-white py-6">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="font-semibold text-lg">Keep Connected</p>

        <div className="flex justify-center flex-wrap gap-6">
          {socialLinks.map(({ icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#011AFF] dark:text-white hover:text-[#FF7B00] transition-colors duration-300">
              {icon}
            </a>
          ))}
        </div>

        <p className="font-semibold text-sm">
          &copy; {new Date().getFullYear()} Nidhi Navandar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
