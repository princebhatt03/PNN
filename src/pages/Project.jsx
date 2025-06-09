import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = () => {
  const projects = [
    {
      title: 'Anti Money Laundering Detection',
      type: 'Machine Learning · Big Data',
      role: 'ML Engineer',
      duration: 'Jan 2024 – Mar 2024',
      liveLink: 'https://your-aml-streamlit-app.com',
      github: 'https://github.com/your-repo/aml-detection',
      description: [
        'Developed a predictive model to detect money laundering activities.',
        'Trained models: Random Forest, Logistic Regression, XGBoost (93% accuracy).',
        'Integrated model with a Streamlit dashboard for real-time predictions.',
        'Performed large-scale data handling and EDA using PySpark.',
        'Hosted the ML pipeline and UI on Azure Cloud Services.',
        'Power BI dashboards for actionable insights.',
      ],
      techStack: ['Python', 'PySpark', 'Streamlit', 'Azure', 'Power BI'],
    },
    {
      title: 'Book App',
      type: 'Web App · Streamlit',
      role: 'Full Stack Developer',
      duration: 'Oct 2023 – Nov 2023',
      liveLink: '',
      github: 'https://github.com/your-repo/book-app',
      description: [
        'Built an online BookStore platform with Streamlit.',
        'SQL backend for book listings, order management, and user sessions.',
        'Clean UI with features like category filtering, search, and checkout.',
      ],
      techStack: ['Streamlit', 'SQL', 'Python'],
    },
    {
      title: 'Heart Disease Prediction Using Wrapper Method',
      type: 'Machine Learning · HealthTech',
      role: 'ML Engineer',
      duration: 'Aug 2023 – Sep 2023',
      liveLink: '',
      github: 'https://github.com/your-repo/heart-disease-prediction',
      description: [
        'Implemented ML models (RF, SVM, KNN, DT, LR) for heart disease prediction.',
        'Used Forward Feature Selection to boost accuracy from 67% to 84.61%.',
        'Focused on reliability, clinical readiness, and real-time analytics.',
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

  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mt-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#FF7B00]">
            Projects
          </h1>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            A showcase of key academic and freelance projects involving data
            science, ML, and full stack development.
          </p>
        </div>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#FF7B00]/5 dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 transition hover:shadow-xl border border-[#FF7B00]/10">
              <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h2 className="text-2xl font-bold text-[#124E66]">
                  {project.title}
                </h2>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                  <span className="mr-2">{project.type}</span>·{' '}
                  <span className="ml-2">{project.duration}</span>
                </div>
              </div>

              <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                {project.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="ml-4 list-disc">
                    {point}
                  </li>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-[#FACC15]/30 text-[#FF7B00] px-3 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
