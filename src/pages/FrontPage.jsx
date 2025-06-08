import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/Profile-Image1.jpg';
import bgImage from '../assets/images/BG3.jpg';

const summaryPoints = [
  'Computer engineering graduate with a PG Diploma in Big Data Analytics.',
  'Fresher Software Engineer strong Python Development, skilled in collaboration for timely, cost-effective project completion.',
  'Proficient in big data, machine learning, data visualization, SQL, and Core Java.',
  'Passionate about data science and tackling real-world challenges with innovative, emerging technologies.',
  'Strong analytical and communication skills to contribute to teams and deliver impactful solutions.',
  'Excited to learn from professionals and enhance technical skills through mentorship and collaboration.',
  'Seeking opportunities to apply expertise in software development and data science for meaningful, complex problem solving.',
];

const FrontPage = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < summaryPoints.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, 700); // Show next point every 700ms
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <div
      className="pt-20 min-h-screen bg-cover bg-center bg-no-repeat text-[#124E66] flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left: Profile Section */}
        <div className="flex flex-col p-2 items-center md:items-start text-center md:text-left space-y-4 md:w-1/3">
          <img
            src={profileImage}
            alt="Nidhi Navandar"
            className="w-40 h-40 rounded-full border-4 border-[#748D92] shadow-lg"
          />
          <h1 className="text-3xl font-bold">Nidhi Navandar</h1>
          <h2 className="text-xl text-[#748D92]">
            Big Data Enthusiast | Python Developer | Machine Learning Explorer
          </h2>
        </div>

        {/* Right: Summary Section */}
        <section className="md:w-2/3 bg-white/80 p-8 mb-2 rounded-lg shadow-md text-[#124E66] max-w-full">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-6">Summary</h3>
          <ul className="space-y-4 list-none">
            {summaryPoints.map((point, idx) => (
              <li
                key={idx}
                className={`flex items-start space-x-3 opacity-0 transform translate-x-[-20px] transition-all duration-500 ${
                  idx < visibleCount ? 'opacity-100 translate-x-0' : ''
                }`}>
                <span className="mt-1 text-[#124E66] font-bold text-xl">•</span>
                <p className="text-base leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FrontPage;
