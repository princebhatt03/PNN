import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/Profile-Image1.jpg';
import bgImage from '../assets/images/BG3.jpg';
import Resume from '../assets/docs/Nidhi-Navandar-Resume.pdf';

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
    <>
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
            <h1 className="text-3xl bg-white/80 p-2 rounded-lg font-bold">Nidhi Navandar</h1>
            <h2 className="text-xl bg-white/80 p-2 rounded-lg text-[#748D92]">
              Big Data Enthusiast | Python Developer | Machine Learning Explorer
            </h2>
          </div>

          {/* Right: Summary Section */}
          <section className="md:w-2/3 bg-white/80 p-8 mb-2 rounded-lg shadow-md text-[#124E66] max-w-full">
            <h3 className="text-2xl font-semibold border-b pb-2 mb-6">
              Summary
            </h3>
            <ul className="space-y-4 list-none">
              {summaryPoints.map((point, idx) => (
                <li
                  key={idx}
                  className={`flex items-start space-x-3 opacity-0 transform translate-x-[-20px] transition-all duration-500 ${
                    idx < visibleCount ? 'opacity-100 translate-x-0' : ''
                  }`}>
                  <span className="mt-1 text-[#124E66] font-bold text-xl">
                    •
                  </span>
                  <p className="text-base leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <section
        id="resume"
        className="bg-[#F9FAFB] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#124E66] mb-2 animate-fade-in">
              Resume
            </h2>
            <p className="text-lg text-[#748D92]">
              Nidhi Navandar
              <br />
              Machine Learning Enthusiast
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Summary & Projects */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold text-[#124E66] border-b pb-2">
                  Summary
                </h3>
                <p className="text-[#124E66] mt-2">
                  <em>
                    Computer engineering graduate with a PG Diploma in Big Data
                    Analytics. Passionate about data science, Python
                    development, and solving real-world problems using emerging
                    technologies. Proficient in big data tools, ML algorithms,
                    SQL, and data visualization with strong analytical and
                    communication skills.
                  </em>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#124E66] border-b pb-2">
                  Projects
                </h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium">
                      Anti Money Laundering Detection
                    </h4>
                    <ul className="list-disc list-inside text-[#124E66] ml-4">
                      <li>
                        Built ML models (Random Forest, Logistic Regression,
                        XGBoost) with 93% accuracy.
                      </li>
                      <li>
                        Performed EDA with PySpark and deployed via Azure using
                        Streamlit & Pickle integration.
                      </li>
                      <li>Created visual dashboards using Power BI.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium">
                      Book App (Streamlit + SQL)
                    </h4>
                    <ul className="list-disc list-inside text-[#124E66] ml-4">
                      <li>
                        Developed a Bookstore platform using Streamlit connected
                        to a SQL database.
                      </li>
                      <li>
                        Users can browse, search, and purchase books online.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium">
                      Heart Disease Prediction System
                    </h4>
                    <ul className="list-disc list-inside text-[#124E66] ml-4">
                      <li>
                        Used ML models (Random Forest, SVM, KNN, Decision Tree)
                        with feature selection (KNN FFS).
                      </li>
                      <li>
                        Improved accuracy from 67% to 84.61%, aiding early
                        diagnosis and healthcare support.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Courses */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl font-semibold text-[#124E66] border-b pb-2">
                  Education
                </h3>
                <div className="mt-4 space-y-4 text-[#124E66]">
                  <div>
                    <h4 className="font-medium">
                      PG Diploma in Big Data Analytics
                    </h4>
                    <p className="text-sm">CDAC Kharghar, Mumbai</p>
                    <p className="text-sm">Mar 2024 – Aug 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      B.E. in Computer Engineering
                    </h4>
                    <p className="text-sm">
                      MES Wadia College of Engineering, Pune
                    </p>
                    <p className="text-sm">2019 – 2023 | CGPA: 7.57</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#124E66] border-b pb-2">
                  Courses
                </h3>
                <ul className="list-disc list-inside text-[#124E66] ml-4 mt-2">
                  <li>
                    SQL & Power BI: Data Analytics & Visualization – Udemy
                  </li>
                  <li>Ultimate Hands-On Hadoop – Udemy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <a
              href={Resume}
              target="_blank"
              download>
              <button className="bg-[#124E66] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#0e3d52] transition">
                Tap to Download Full Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontPage;
