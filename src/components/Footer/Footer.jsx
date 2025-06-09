import React from 'react';
import profile from '../../assets/images/Profile-Image1.jpg';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHackerrank,
  FaLocationArrow,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Skills', link: '/skills' },
  { title: 'Project', link: '/project' },
];

// Background animation with dark blue to white gradient shifting
const animatedBg = {
  background:
    'linear-gradient(-45deg, #002057, #3f72af, #ffffff, #3f72af, #002057)',
  backgroundSize: '300% 300%',
  animation: 'gradientShift 20s ease infinite',
  color: 'rgba(0, 31, 63, 0.85)', // dark navy text with slight transparency for better contrast
  textShadow: '0 0 5px rgba(255, 255, 255, 0.6)', // subtle white glow for readability
};

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <footer
        style={animatedBg}
        className="py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Info */}
            <div className="flex flex-col items-center md:items-start gap-3 px-4">
              <h1 className="flex items-center gap-3 font-bold text-2xl mb-2">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                Nidhi Navandar
              </h1>
              <p className="font-semibold">
                Aspiring Data Scientist | Python Developer | Big Data Enthusiast
              </p>
            </div>

            {/* Quick Links */}
            <div className="px-4">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map(link => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className="hover:text-[#002057] transition-colors duration-300 font-semibold">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Location */}
            <div className="px-4">
              <h2 className="text-xl font-bold mb-4">Connect</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/navandarnidhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002057] transition-colors duration-300"
                  aria-label="GitHub">
                  <FaGithub size={26} />
                </a>
                <a
                  href="https://linkedin.com/in/nidhi-navandar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002057] transition-colors duration-300"
                  aria-label="LinkedIn">
                  <FaLinkedin size={26} />
                </a>
                <a
                  href="https://wa.me/917977565476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002057] transition-colors duration-300"
                  aria-label="WhatsApp">
                  <FaWhatsapp size={26} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/navandarnidhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#002057] transition-colors duration-300"
                  aria-label="HackerRank">
                  <FaHackerrank size={26} />
                </a>
                <a
                  href="mailto:navandarnidhi@gmail.com"
                  className="hover:text-[#002057] transition-colors duration-300"
                  aria-label="Email">
                  <MdEmail size={26} />
                </a>
              </div>

              <div className="flex items-center gap-2 mt-6 font-semibold">
                <FaLocationArrow size={20} />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center font-semibold text-sm">
            &copy; {new Date().getFullYear()} Nidhi Navandar. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
