import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<FrontPage />}
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
          element={<Project />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
