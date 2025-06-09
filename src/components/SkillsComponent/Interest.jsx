import React from 'react';
import {
  FaPaintBrush,
  FaCameraRetro,
  FaPlaneDeparture,
  FaPenNib,
} from 'react-icons/fa';

const interests = [
  {
    name: 'Painting',
    icon: <FaPaintBrush className="text-[#FF7B00] text-3xl" />,
  },
  {
    name: 'Photography',
    icon: <FaCameraRetro className="text-[#011AFF] text-3xl" />,
  },
  {
    name: 'Sketching',
    icon: <FaPenNib className="text-[#124E66] text-3xl" />,
  },
  {
    name: 'Traveling',
    icon: <FaPlaneDeparture className="text-[#FACC15] text-3xl" />,
  },
];

const Interests = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-[#FF7B00] font-medium mb-2 uppercase tracking-wider">
          Beyond Technology
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#011AFF] mb-8">
          Interests
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {interests.map((item, index) => (
            <div
              key={index}
              className="bg-[#FF7B00]/10 dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#124E66] dark:text-white">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
