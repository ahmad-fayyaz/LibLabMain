import logoLight from "../assets/logo-dark.png"; // Light mode logo
import logoDark from "../assets/logo-light.png"; // Dark mode logo
import { Mail, Moon, Sun, Music2 } from 'lucide-react';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="sticky top-0 z-50 py-3 w-full bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="container px-2 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={darkMode ? logoDark : logoLight} alt="Logo" />
          </div>
          <ul className="flex space-x-5">
            <li><a className="font-bold underline" href="https://swat-ds.github.io/docsLibLab/" target="_blank" rel="noopener noreferrer">docs.</a></li>
            <li><a href="mailto:alicast1@swarthmore.edu"><Mail size={20} /></a></li>
            <li>
              <button onClick={toggleDarkMode}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
            <li><a href="#"><Music2 size={20} /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;