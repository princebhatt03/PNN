import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

// Use a coding or developer-themed GIF
const codingGif = 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif';

const Contact = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-white dark:bg-gray-900 text-[#124E66] px-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* GIF Section */}
          <div data-aos="zoom-in">
            <img
              src={codingGif}
              alt="Coding"
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover rounded-xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold">
              Get in Touch
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-600 dark:text-gray-300 tracking-wide leading-5">
              Feel free to connect with me for opportunities, collaboration, or
              just a friendly tech chat.
            </p>
            <div className="flex flex-col gap-4 text-base text-gray-800 dark:text-gray-200">
              <div
                data-aos="fade-up"
                className="flex items-center gap-4">
                <FaEnvelope className="text-2xl h-10 w-10 p-2 bg-blue-100 dark:bg-blue-400 rounded-full shadow-sm" />
                <p>nidhinavandar@gmail.com</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4">
                <FaPhone className="text-2xl h-10 w-10 p-2 bg-green-100 dark:bg-green-400 rounded-full shadow-sm" />
                <p>+91 9876543210</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl h-10 w-10 p-2 bg-yellow-100 dark:bg-yellow-400 rounded-full shadow-sm" />
                <p>Pune, Maharashtra, India</p>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4">
                <FaLinkedin className="text-2xl h-10 w-10 p-2 bg-sky-100 dark:bg-sky-400 rounded-full shadow-sm" />
                <a
                  href="https://linkedin.com/in/nidhinavandar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  linkedin.com/in/nidhinavandar
                </a>
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center gap-4">
                <FaGithub className="text-2xl h-10 w-10 p-2 bg-gray-200 dark:bg-gray-600 rounded-full shadow-sm" />
                <a
                  href="https://github.com/nidhinavandar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  github.com/nidhinavandar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
