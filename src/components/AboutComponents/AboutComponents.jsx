import React from 'react';
import profileImage from '../../assets/images/Profile-Image1.jpg';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaStar,
} from 'react-icons/fa';

const AboutData = [
  {
    id: 1,
    icon: (
      <FaStar
        className="text-yellow-500 mx-auto mb-2"
        size={24}
      />
    ),
    title: 'Big Data Enthusiast',
    description:
      'Passionate about analyzing large datasets and extracting actionable insights using advanced tools and techniques.',
  },
  {
    id: 2,
    icon: (
      <FaStar
        className="text-yellow-500 mx-auto mb-2"
        size={24}
      />
    ),
    title: 'Python Developer',
    description:
      'Skilled in writing clean and efficient Python code for data processing, automation, and machine learning projects.',
  },
  {
    id: 3,
    icon: (
      <FaStar
        className="text-yellow-500 mx-auto mb-2"
        size={24}
      />
    ),
    title: 'Machine Learning Explorer',
    description:
      'Exploring the latest ML algorithms and building models to solve real-world problems with practical applications.',
  },
];

const About = () => {
  return (
    <div className="pt-20 pb-20 min-h-screen bg-white dark:bg-gray-900 text-[#124E66] px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-primary">
          About
        </h1>
        {/* Header Section */}
        <div
          className="text-center mb-16"
          data-aos="fade-up">
          <img
            src={profileImage}
            alt="Nidhi Navandar"
            className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-[#748D92]"
          />
          <h1 className="text-4xl font-bold mt-6 mb-2">Nidhi Navandar</h1>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Computer Engineering Graduate & PG Diploma in Big Data Analytics.
            Python Developer & Machine Learning Explorer passionate about
            solving real-world challenges through technology.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-6 text-[#124E66] dark:text-gray-300 text-2xl">
            <a
              href="https://github.com/nidhinavandar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[#D3D9D4] transition">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nidhinavandar"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#D3D9D4] transition">
              <FaLinkedin />
            </a>
            <a
              href="mailto:nidhi@example.com"
              aria-label="Email"
              className="hover:text-[#D3D9D4] transition">
              <FaEnvelope />
            </a>
            <a
              href="tel:+1234567890"
              aria-label="Phone"
              className="hover:text-[#D3D9D4] transition">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* About Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {AboutData.map(({ id, icon, title, description }) => (
            <div
              key={id}
              data-aos="zoom-in"
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
              <div className="flex justify-center">{icon}</div>
              <h2 className="text-xl font-semibold text-center mb-3">
                {title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-20">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-[#124E66] hover:bg-[#0e3a4f] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
            C
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default About;
