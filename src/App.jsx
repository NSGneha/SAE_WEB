import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Awards from './pages/Awards';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-sae-dark min-h-screen text-white font-sans selection:bg-sae-red selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
