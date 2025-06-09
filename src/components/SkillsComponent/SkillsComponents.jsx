import React from 'react';
import Slider from 'react-slick';
import { FaPython, FaJava, FaDatabase } from 'react-icons/fa';
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
    icon: <FaPython className="text-yellow-400 text-4xl" />,
    detail: 'Strong command in scripting, data analysis, and automation.',
  },
  {
    id: 2,
    name: 'Core Java',
    icon: <FaJava className="text-red-500 text-4xl" />,
    detail: 'OOP concepts, backend logic & application development.',
  },
  {
    id: 3,
    name: 'Power BI',
    icon: <SiPowerbi className="text-yellow-600 text-4xl" />,
    detail: 'Data dashboards, KPI visuals, advanced DAX queries.',
  },
  {
    id: 4,
    name: 'Excel',
    icon: <BsFillBarChartFill className="text-green-500 text-4xl" />,
    detail: 'Pivot tables, formulas, charts, and data reporting.',
  },
  {
    id: 5,
    name: 'MySQL & MongoDB',
    icon: (
      <div className="flex gap-2 items-center">
        <SiMysql className="text-blue-600 text-3xl" />
        <SiMongodb className="text-green-500 text-3xl" />
      </div>
    ),
    detail: 'Relational + NoSQL DB management and querying.',
  },
  {
    id: 6,
    name: 'Hadoop, Hive, Spark',
    icon: (
      <div className="flex gap-2 items-center">
        <SiApachehadoop className="text-blue-500 text-3xl" />
        <SiApachespark className="text-orange-500 text-3xl" />
      </div>
    ),
    detail: 'Big data storage, processing, and real-time analytics.',
  },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 10000,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Skills = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm text-primary">Technical Skills</p>
          <h2 className="text-3xl font-bold">What Nidhi Knows</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tools and technologies Nidhi has mastered.
          </p>
        </div>
        <Slider {...sliderSettings}>
          {SkillsData.map(skill => (
            <div
              key={skill.id}
              className="px-4 my-6">
              <div className="flex flex-col items-center bg-primary/10 dark:bg-gray-800 rounded-xl shadow-lg py-10 px-6 text-center min-h-[260px]">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {skill.detail}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
