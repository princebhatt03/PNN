import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Resume from './components/Resume/Reusme';
import Footer from './components/Footer/Footer';

// Placeholder pages for routing
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Project';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Main homepage layout
  const HomePage = () => (
    <>
      <Hero />
      <Resume />
    </>
  );

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/project"
            element={<Projects />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
