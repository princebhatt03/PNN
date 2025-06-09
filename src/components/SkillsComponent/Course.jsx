import React from 'react';

const Courses = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm text-primary">Certifications & Learning</p>
          <h2 className="text-3xl font-bold">Courses Completed</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Course 1 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              SQL & Power BI: Data Analytics & Visualization – Udemy
            </h3>
            <ul className="text-sm list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Data querying with SELECT, WHERE, GROUP BY</li>
              <li>Advanced SQL: CASE, JOINs, Window Functions</li>
              <li>Power BI dashboards & database procedures</li>
            </ul>
          </div>

          {/* Course 2 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              The Ultimate Hands-On Hadoop – Udemy
            </h3>
            <ul className="text-sm list-disc pl-4 text-gray-600 dark:text-gray-300">
              <li>Big Data with Hadoop, HDFS, MapReduce</li>
              <li>Data processing using Pig, Spark, Hive</li>
              <li>Kafka, YARN, Spark Streaming & cluster management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
