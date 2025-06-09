import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from 'react-icons/fa';

const codingGif = 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif';

const Contact = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center px-4 py-16 bg-white text-[#124E66]">
      <div className="container mt-10 mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#FF7B00]">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div data-aos="fade-right">
            <img
              src={codingGif}
              alt="Contact"
              className="rounded-xl w-full max-w-md mx-auto drop-shadow-[-10px_10px_15px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Right: Details */}
          <div
            className="space-y-6"
            data-aos="fade-left">
            <p className="text-gray-700 text-lg dark:text-gray-300">
              Whether you’re looking to collaborate, offer a job opportunity, or
              just say hello — feel free to reach out!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 bg-[#FACC15]/20 rounded-xl p-4 shadow hover:shadow-lg transition">
                <FaEnvelope className="text-[#FF7B00] text-xl" />
                <p className="text-sm sm:text-base">nidhinavandar@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-[#011AFF]/10 rounded-xl p-4 shadow hover:shadow-lg transition">
                <FaPhone className="text-[#011AFF] text-xl" />
                <p className="text-sm sm:text-base">+91 9876543210</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-[#FF7B00]/10 rounded-xl p-4 shadow hover:shadow-lg transition">
                <FaMapMarkerAlt className="text-[#FF7B00] text-xl" />
                <p className="text-sm sm:text-base">Pune, Maharashtra, India</p>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 bg-[#011AFF]/10 rounded-xl p-4 shadow hover:shadow-lg transition">
                <FaLinkedin className="text-[#011AFF] text-xl" />
                <a
                  href="https://linkedin.com/in/nidhinavandar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base underline hover:text-[#FF7B00]">
                  linkedin.com/in/nidhinavandar
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition">
                <FaGithub className="text-gray-800 text-xl" />
                <a
                  href="https://github.com/nidhinavandar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base underline hover:text-[#FF7B00]">
                  github.com/nidhinavandar
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#FF7B00] hover:bg-[#011AFF] text-white px-6 py-3 rounded-full font-medium shadow transition duration-300">
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <p className="italic text-gray-500 text-sm">
            “Let’s build something impactful together.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
