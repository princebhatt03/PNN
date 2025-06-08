import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7f1f5] to-[#b9dee6] flex flex-col items-center justify-center px-6 text-[#124E66] text-center animate-fade-in">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Oops! Page Not Found</p>
      <p className="mb-6 text-[#124E66]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-[#124E66] text-white cursor-pointer font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#6187b9] transition">
        Go Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
