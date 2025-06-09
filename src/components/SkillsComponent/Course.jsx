import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: 'SQL & Power BI: Data Analytics & Visualization – Udemy',
    points: [
      'Mastered SELECT, WHERE, GROUP BY, JOINS',
      'Advanced SQL queries: CASE, Window Functions',
      'Power BI dashboards, DAX measures, KPIs',
    ],
    certificateLink: 'https://www.udemy.com/certificate/example-sql-powerbi',
    badge: 'Data Analytics',
  },
  {
    id: 2,
    title: 'The Ultimate Hands-On Hadoop – Udemy',
    points: [
      'Big Data using Hadoop, HDFS, MapReduce',
      'Pig, Hive, Spark batch & real-time processing',
      'Kafka, YARN, Cluster Setup & Spark Streaming',
    ],
    certificateLink: 'https://www.udemy.com/certificate/example-hadoop',
    badge: 'Big Data',
  },
];

const Courses = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 text-[#124E66] dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-[#FF7B00] font-medium uppercase tracking-wider">
            Certifications & Learning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#011AFF]">
            Courses Completed
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Key online certifications completed to enhance professional
            expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {courses.map(course => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-[#FF7B00]">
                  {course.title}
                </h3>
                <span className="bg-[#FACC15] text-xs font-semibold text-black px-3 py-1 rounded-full">
                  {course.badge}
                </span>
              </div>
              <ul className="text-sm list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                {course.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
