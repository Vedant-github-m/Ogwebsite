import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';


import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
