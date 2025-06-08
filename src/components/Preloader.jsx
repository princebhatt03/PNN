import React from 'react';
import preload from '../assets/images/favicon2.png';

const Preloader = () => {
  return (
    <div
      id="preloader-active"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <div className="animate-spin rounded-full border-8 border-[#124E66] border-t-transparent w-16 h-16 mx-auto mb-4">
          <div className="text-center">
            <img
              src={preload}
              alt="Loading"
              className="w-12 h-12 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
