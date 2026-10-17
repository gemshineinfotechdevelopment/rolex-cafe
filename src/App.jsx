import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import GoldIntro from './components/common/GoldIntro';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showIntro, setShowIntro] = useState(true);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {/* Optional 2–3 second Golden Logo Intro on first visit */}
      {showIntro && <GoldIntro onFinish={() => setShowIntro(false)} />}

      {/* Main Header & Nav */}
      <Navbar currentPage={currentPage} setCurrentPage={handleNavigate} />

      {/* Dynamic Multi-page Content */}
      <main className="site-content" id="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About onNavigate={handleNavigate} />}
        {currentPage === 'menu' && <Menu onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Consistent Site Footer */}
      <Footer setCurrentPage={handleNavigate} />
    </div>
  );
}

export default App;
