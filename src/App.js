import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'; // Import các component khác của bạn
import Contact from './pages/Contact'; // Import các component khác của bạn
import './styles/Home.css';
import './styles/About.css';
import './styles/Contact.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
