import React from 'react';
import resume from '../../assets/docs/Nidhi-Navandar-Resume.pdf';

const resumeData = [
  {
    title: 'Education',
    details: [
      {
        heading: 'PG Diploma in Big Data Analytics',
        subheading: 'CDAC Kharghar, Mumbai (Mar 2024 – Aug 2024)',
      },
      {
        heading: 'B.E. in Computer Engineering',
        subheading:
          'MES Wadia College of Engineering, Pune (2019 – 2023), CGPA: 7.57',
      },
    ],
  },
  {
    title: 'Skills',
    details: [
      {
        heading: 'Languages',
        subheading: 'Python, Core Java',
      },
      {
        heading: 'Big Data Tools',
        subheading: 'Hadoop, Hive, Spark',
      },
      {
        heading: 'Databases',
        subheading: 'MySQL, MongoDB',
      },
      {
        heading: 'Visualization',
        subheading: 'Power BI, Excel',
      },
    ],
  },
  {
    title: 'Projects',
    details: [
      {
        heading: 'Anti Money Laundering Detection',
        subheading: 'PySpark, Azure, Power BI, Streamlit (93% Accuracy)',
      },
      {
        heading: 'Book App',
        subheading: 'Streamlit + SQL for browsing and purchasing books',
      },
      {
        heading: 'Heart Disease Prediction',
        subheading:
          'Used ML Models (RF, SVM, KNN), accuracy improved to 84.61%',
      },
    ],
  },
  {
    title: 'Courses',
    details: [
      {
        heading: 'SQL & Power BI',
        subheading: 'Udemy',
      },
      {
        heading: 'Ultimate Hadoop',
        subheading: 'Udemy',
      },
    ],
  },
];

const ResumeSection = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-1 text-primary">
            Resume
          </h1>
          <h1
            data-aos="fade-up"
            className="text-lg font-bold">
            Nidhi Navandar
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400">
            Aspiring Data Scientist | Python Developer | Big Data Enthusiast
          </p>
        </div>
        {/* Resume body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resumeData.map((section, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
              className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-md shadow">
              <h3 className="text-xl font-semibold text-primary">
                {section.title}
              </h3>
              {section.details.map((item, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {item.heading}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.subheading}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* download resume button */}
        <div className="flex justify-center">
          <a
            href={resume}
            download
            className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80">
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
