import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import KidShield from './pages/KidShield';


import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kidshield" element={<KidShield />} />
      </Routes>
    </Router>
  );
}

export default App;
