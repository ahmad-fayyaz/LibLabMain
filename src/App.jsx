import { useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import Navbar from './components/navbar.jsx';

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
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
      </div>
    </div>
  );
};

export default App;