import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Footer from './Components/Global/Footer';
import FloatingWhatsApp from './Components/Global/FloatingWhatsApp';
import FloatingCall from './Components/Global/FloatingCall';
import ScrollToTop from './Components/Global/ScrollToTop';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Directors from './Pages/About/Directors';
import Projects from './Pages/Projects/Projects';
import EmbeeDelight from './Pages/Projects/EmbeeDelight';
import Skydale from './Pages/Projects/Skydale';
import Utsodhara from './Pages/Projects/Utsodhara';
import RightAngle from './Pages/Projects/RightAngle';
import Senses from './Pages/Projects/Senses';
import RamVatika from './Pages/Projects/RamVatika';
import EdenCrown from './Pages/Projects/EdenCrown';
import AnandVilla from './Pages/Projects/AnandVilla';
import NS10 from './Pages/Projects/NS10';
import RentResell from './Pages/RentResell/RentResell';
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
            <Route path="/projects/right-angle" element={<RightAngle />} />
            <Route path="/projects/the-senses" element={<Senses />} />
            <Route path="/projects/ram-vatika" element={<RamVatika />} />
            <Route path="/projects/eden-crown" element={<EdenCrown />} />
            <Route path="/projects/anand-villa" element={<AnandVilla />} />
            <Route path="/projects/ns10" element={<NS10 />} />
            <Route path="/rent-resell" element={<RentResell />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCall />
      </div>
    </Router>
  );
}

export default App;
