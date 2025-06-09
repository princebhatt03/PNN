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
    <div className="mt-14 mb-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-1 text-[#FF7B00]">
            Resume
          </h1>
          <h1
            data-aos="fade-up"
            className="text-lg font-bold text-gray-900">
            Nidhi Navandar
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-600">
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
              className="space-y-3 bg-white p-6 rounded-md shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-primary">
                {section.title}
              </h3>
              {section.details.map((item, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-gray-900">
                    {item.heading}
                  </h4>
                  <p className="text-sm text-gray-600">{item.subheading}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Download resume button */}
        <div className="flex justify-center">
          <a
            href={resume}
            download
            className="mt-10 cursor-pointer bg-[#FF7B00] hover:bg-[#011AFF] text-white py-2 px-6 rounded-md transition-colors duration-300">
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
