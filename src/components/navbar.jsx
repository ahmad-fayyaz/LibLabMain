import { useState, useRef, useEffect } from 'react';
import logoLight from "../assets/logo-dark.png"; // Light mode logo
import logoDark from "../assets/logo-light.png"; // Dark mode logo
import { Mail, Moon, Sun, Music2, VolumeX } from 'lucide-react';
import sound from "../assets/background-music.mp3";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const playAudio = () => {
        audioRef.current.play().catch(error => {
          console.error("Error attempting to play audio:", error);
        });
      };

      // Attempt to play the audio
      playAudio();

      // Unmute the audio after playing
      audioRef.current.muted = false;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error attempting to play audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 w-full bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="transition container px-2 mx-auto relative">
        <div className="transition flex justify-between items-center">
          <div className="transition flex items-center flex-shrink-0">
            <a href="/LibLabMain/"><img className="transition h-12 w-12 mr-2" src={darkMode ? logoDark : logoLight} alt="Logo" /></a>
          </div>
          <ul className="transition flex space-x-5">
            <li><a className="transition font-bold underline" href="https://swat-ds.github.io/docsLibLab/" target="_blank" rel="noopener noreferrer">docs.</a></li>
            <li><a href="mailto:alicast1@swarthmore.edu"><Mail size={20} /></a></li>
            <li>
              <button onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
            <li>
              <button onClick={toggleMusic}>
                {isPlaying ? <VolumeX size={20} /> : <Music2 size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <audio ref={audioRef} src= {sound} loop autoPlay muted />
    </nav>
  );
};

export default Navbar;