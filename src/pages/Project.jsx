import React from 'react';

const projects = [
  {
    title: 'Anti Money Laundering Detection',
    description: [
      'Developed a predictive model to detect money laundering activities.',
      'Trained models: Random Forest, Logistic Regression, XGBoost (achieved 93% accuracy).',
      'Created a pickle file for the trained model and integrated it with a Streamlit app for predictions.',
      'Performed EDA using PySpark.',
      'Deployed the project on Azure Cloud Services.',
      'Visualized insights and trends in the dataset using Power BI.',
    ],
    techStack: ['Python', 'PySpark', 'Streamlit', 'Azure', 'Power BI'],
  },
  {
    title: 'Book App',
    description: [
      'A Streamlit-based online BookStore platform to browse and purchase books.',
      'Connected with a SQL database for storing and managing books and orders.',
      'Simple UI built with Streamlit, offering book search, categories, and checkout functionalities.',
    ],
    techStack: ['Streamlit', 'SQL', 'Python'],
  },
  {
    title: 'Heart Disease Prediction Using Wrapper Method and ML',
    description: [
      'Built a heart disease prediction system using ML algorithms: Random Forest, SVM, KNN, Decision Tree, and Logistic Regression.',
      'Used Forward Feature Selection with KNN, improving accuracy from 67% to 84.61%.',
      'Supports early detection and aids medical professionals in decision-making.',
      'Designed for scalability, reliability, and efficiency in clinical usage.',
    ],
    techStack: [
      'Python',
      'ML Algorithms',
      'Feature Selection',
      'Pandas',
      'Matplotlib',
    ],
  },
];

const Project = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-primary">
          Projects
        </h1>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">
                {project.title}
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-primary/20 dark:bg-primary/30 text-primary px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
