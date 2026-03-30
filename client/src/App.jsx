import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Footer from './Components/Global/Footer';
import ScrollToTop from './Components/Global/ScrollToTop';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Directors from './Pages/About/Directors';
import Projects from './Pages/Projects/Projects';
import EmbeeDelight from './Pages/Projects/EmbeeDelight';
import Skydale from './Pages/Projects/Skydale';
import Utsodhara from './Pages/Projects/Utsodhara';
import Contact from './Pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/directors" element={<Directors />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/embee-delight" element={<EmbeeDelight />} />
            <Route path="/projects/skydale" element={<Skydale />} />
            <Route path="/projects/utsodhara" element={<Utsodhara />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
