import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="flex flex-col items-start mt-20 min-h-screen h-screen px-6">
      <div className="w-full max-w-screen-lg mx-auto p-6 lg:w-[820px] lg:h-[330px]">
        <h1 className="font-bold text-4xl lg:text-6xl">LibLab:</h1>
        <h1 className="text-4xl lg:text-6xl">
          <span className="italic">Swarthmore College&rsquo;s</span>
          <span className="font-bold"> Immersive Realities </span>
          <span className="underline"> Initiative</span>
        </h1>
        <h2 className="text-xl lg:text-3xl mt-4 italic text-light-grey dark:text-gray-300 font-thin">
          Join us in shaping the future of reality through immersive experiences and interdisciplinary collaboration.
        </h2>
        <div className="flex flex-auto w-full mt-20 justify-center lg:ml-40 lg:justify-start">
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