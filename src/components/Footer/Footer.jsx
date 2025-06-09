import React from 'react';
import profile from '../../assets/images/Profile-Image1.jpg';
import Banner from '../../assets/website/footer-pattern.jpg';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaHackerrank,
  FaLocationArrow,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
  { title: 'Skills', link: '/skills' },
  { title: 'Project', link: '/project' },
];

const Footer = () => {
  return (
    <div
      style={BannerImg}
      className="text-white">
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3  gap-8 pb-20 pt-10">
          {/* Personal Info */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold flex items-center gap-3 mb-3">
              <img
                src={profile}
                alt="Logo"
                className="max-w-[50px]"
              />
              Nidhi Navandar
            </h1>
            <p className="text-sm text-gray-200">
              Aspiring Data Scientist | Python Developer | Big Data Enthusiast
            </p>
          </div>

          {/* Navigation Links */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold mb-3">Quick Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map(link => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={link.title}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Location */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold mb-3">Connect</h1>
            <div className="flex md:flex-row flex-col md:items-center md:gap-4 gap-3 mb-4">
              <a
                href="https://github.com/navandarnidhi"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-primary transition" />
              </a>
              <a
                href="https://linkedin.com/in/nidhi-navandar"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-primary transition" />
              </a>
              <a
                href="https://wa.me/917977565476"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl hover:text-primary transition" />
              </a>
              <a
                href="https://www.hackerrank.com/profile/navandarnidhi"
                target="_blank"
                rel="noopener noreferrer">
                <FaHackerrank className="text-2xl hover:text-primary transition" />
              </a>
              <a href="mailto:navandarnidhi@gmail.com">
                <MdEmail className="text-2xl hover:text-primary transition" />
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4 text-gray-200">
              <FaLocationArrow />
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center w-full">
          <div className="text-center w-fit p-2 text-black text-sm">
            &copy; {new Date().getFullYear()} Nidhi Navandar. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
