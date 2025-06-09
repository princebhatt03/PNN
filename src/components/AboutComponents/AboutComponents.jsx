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
        className="text-yellow-400 mx-auto mb-2"
        size={24}
      />
    ),
    title: 'Big Data Enthusiast',
    description:
      'Specialized in tools like Hadoop, Spark, Hive, and working with real-time data streams and batch processing.',
  },
  {
    id: 2,
    icon: (
      <FaStar
        className="text-yellow-400 mx-auto mb-2"
        size={24}
      />
    ),
    title: 'Python Developer',
    description:
      'Clean and efficient coding with Python for automation, web scraping, data analysis, and machine learning pipelines.',
  },
  {
    id: 3,
    icon: (
      <FaStar
        className="text-yellow-400 mx-auto mb-2"
        size={24}
      />
    ),
    title: 'Machine Learning Explorer',
    description:
      'Built models using Scikit-learn, PySpark MLlib, and deployed end-to-end ML projects using Streamlit and Power BI.',
  },
];

const quickInfo = [
  { label: 'Name', value: 'Nidhi Navandar' },
  { label: 'Qualification', value: 'B.E. + PG Diploma in Big Data Analytics' },
  { label: 'Location', value: 'Mumbai, Maharashtra' },
  { label: 'Email', value: 'nidhi@example.com' },
  { label: 'Phone', value: '+91 1234567890' },
];

const About = () => {
  return (
    <div className="pt-20 pb-20 min-h-screen bg-white text-[#124E66] px-4">
      <div className="container mt-10 mx-auto max-w-7xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#FF7B00]">
          About Me
        </h1>

        {/* Profile & Bio Section */}
        <div
          className="flex flex-col items-center text-center mb-16"
          data-aos="fade-up">
          <img
            src={profileImage}
            alt="Nidhi Navandar"
            className="w-40 h-40 rounded-full mx-auto shadow-lg border-4 border-secondary"
          />
          <h2 className="text-3xl font-semibold mt-6">Nidhi Navandar</h2>
          <p className="mt-2 max-w-2xl text-gray-600 text-lg">
            Computer Engineering graduate currently pursuing PG Diploma in Big
            Data Analytics at CDAC Mumbai. Passionate about transforming complex
            data into actionable insights using Python, Machine Learning, and
            modern Big Data tools.
          </p>
          <p className="italic text-sm text-gray-500 mt-4">
            “Turning data into direction — one algorithm at a time.”
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-6 text-[#011AFF] text-2xl">
            <a
              href="https://github.com/nidhinavandar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-secondary transition">
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nidhinavandar"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-secondary transition">
              <FaLinkedin />
            </a>
            <a
              href="mailto:nidhi@example.com"
              aria-label="Email"
              className="hover:text-secondary transition">
              <FaEnvelope />
            </a>
            <a
              href="tel:+911234567890"
              aria-label="Phone"
              className="hover:text-secondary transition">
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {quickInfo.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 rounded shadow bg-white border border-gray-200">
              <h4 className="font-semibold text-sm text-[#011AFF]">
                {item.label}
              </h4>
              <p className="text-gray-700 text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Interest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {AboutData.map(({ id, icon, title, description }) => (
            <div
              key={id}
              data-aos="zoom-in"
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-bold text-center text-[#011AFF] mb-2">
                {title}
              </h3>
              <p className="text-gray-700 text-center text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-[#FF7B00] hover:bg-[#011AFF] text-white font-semibold py-3 px-8 rounded-full shadow transition duration-300">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
