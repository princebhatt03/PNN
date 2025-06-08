import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-red-300 w-full h-screen flex-col p-2 flex items-center justify-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-2">The page you’re looking for doesn’t exist.</p>
      <button
        onClick={handleGoHome}
        className="p-2 px-4 bg-amber-500 cursor-pointer mt-4 rounded hover:bg-amber-600 transition duration-200">
        Go Back to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;
