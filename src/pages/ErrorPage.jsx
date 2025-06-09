import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-4">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Please
        return to the homepage.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition duration-200">
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
