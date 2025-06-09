import React from 'react';

const Interests = () => {
  const interests = ['Painting', 'Photography', 'Sketching', 'Traveling'];

  return (
    <div className="py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container text-center">
        <p className="text-sm text-primary mb-2">Beyond Technology</p>
        <h2 className="text-3xl font-bold mb-6">Interests</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-5 py-2 rounded-full bg-primary/10 text-primary font-medium dark:bg-gray-800 dark:text-white shadow-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
