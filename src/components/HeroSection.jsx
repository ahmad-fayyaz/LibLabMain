import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="transition flex-col items-start mt-20 min-h-screen h-screen px-6">
      <div className="transition w-full max-w-screen-lg mx-auto p-6 lg:w-[820px] lg:h-[320px]">
        <h1 className="transition font-bold text-4xl lg:text-6xl">LibLab:</h1>
        <h1 className="text-4xl lg:text-6xl">
          <span className="transition italic">Swarthmore College&rsquo;s</span>
          <span className="transition font-bold"> Immersive Realities </span>
          <span className="transition underline"> Initiative</span>
        </h1>
        <h2 className="transition text-xl lg:text-3xl mt-4 italic text-light-grey dark:text-gray-300 font-thin">
          Join us in shaping the future of reality through immersive experiences and interdisciplinary collaboration.
        </h2>
        <div className="transition flex flex-auto w-full mt-20 justify-center lg:ml-40 lg:justify-start">
          <button
            onClick={handleButtonClick}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-black hover:bg-light-grey text-white px-8 lg:px-20 py-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Enter the Gallery Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;