import React from 'react';
import { FaPython, FaJava } from 'react-icons/fa';
import {
  SiMysql,
  SiMongodb,
  SiPowerbi,
  SiApachehadoop,
  SiApachespark,
} from 'react-icons/si';
import { BsFillBarChartFill } from 'react-icons/bs';

const SkillsData = [
  {
    id: 1,
    name: 'Python',
    icon: <FaPython className="text-yellow-400 text-3xl" />,
    level: 'Expert',
    percentage: 90,
    detail: 'Scripting, data automation, pandas, NumPy, APIs.',
  },
  {
    id: 2,
    name: 'Core Java',
    icon: <FaJava className="text-red-500 text-3xl" />,
    level: 'Advanced',
    percentage: 85,
    detail: 'OOP, backend logic, JDBC, data structures.',
  },
  {
    id: 3,
    name: 'Power BI',
    icon: <SiPowerbi className="text-yellow-600 text-3xl" />,
    level: 'Intermediate',
    percentage: 80,
    detail: 'Data visualization, DAX, KPIs, dashboards.',
  },
  {
    id: 4,
    name: 'Excel',
    icon: <BsFillBarChartFill className="text-green-500 text-3xl" />,
    level: 'Advanced',
    percentage: 88,
    detail: 'Pivot tables, charts, VLOOKUP, data analytics.',
  },
  {
    id: 5,
    name: 'MySQL & MongoDB',
    icon: (
      <div className="flex gap-2">
        <SiMysql className="text-blue-600 text-2xl" />
        <SiMongodb className="text-green-500 text-2xl" />
      </div>
    ),
    level: 'Advanced',
    percentage: 85,
    detail: 'Database modeling, queries, joins, NoSQL.',
  },
  {
    id: 6,
    name: 'Hadoop, Hive, Spark',
    icon: (
      <div className="flex gap-2">
        <SiApachehadoop className="text-blue-500 text-2xl" />
        <SiApachespark className="text-orange-500 text-2xl" />
      </div>
    ),
    level: 'Intermediate',
    percentage: 75,
    detail: 'Big data batch/stream processing & analytics.',
  },
];

const Skills = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 text-[#124E66] dark:text-white">
      <div className="max-w-7xl mt-12 mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#FF7B00]">
            Skills
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Technical expertise gained through academic, freelance, and
            internship projects.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SkillsData.map(skill => (
            <div
              key={skill.id}
              className="bg-[#FFFAF4] dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {skill.detail}
              </p>

              {/* Progress bar */}
              <div className="mb-2 text-sm font-medium flex justify-between text-gray-600 dark:text-gray-400">
                <span>{skill.level}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${skill.percentage}%`,
                    background:
                      skill.percentage > 85
                        ? '#FF7B00'
                        : skill.percentage >= 80
                        ? '#FACC15'
                        : '#011AFF',
                  }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
