import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/navbar.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import FeaturedScans from './components/FeaturedScans.jsx';
import GalleryRoom from './components/GalleryRoom.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router basename='/LibLabMain/'>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className='flex-grow pt-20 px-0'>
          <Routes>
            <Route path="/" element={<>
              <HeroSection />
              <FeaturedScans />
            </>} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery-room" element={<GalleryRoom />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;