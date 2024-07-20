import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/navbar.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import FeaturedScans from './components/FeaturedScans.jsx';
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
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className='pt-20 px-0'>
          <Routes>
            <Route path="/" element={<>
              <HeroSection />
              <FeaturedScans />
            </>} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;