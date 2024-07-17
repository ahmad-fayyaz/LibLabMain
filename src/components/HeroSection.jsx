const HeroSection = () => {
    return (
      <div className="flex flex-col items-start mt-20 min-h-screen h-screen px-6">
        <div className="w-full max-w-screen-lg mx-auto p-6 lg:w-[820px] lg:h-[330px]">
          <h1 className="font-bold text-4xl lg:text-6xl">LibLab:</h1>
          <h1 className="text-4xl lg:text-6xl">
            <span className="italic">Swarthmore College&rsquo;s</span>
            <span className="font-bold"> Immersive Realities </span>
            <span className="underline"> Initiative</span>
          </h1>
          <h2 className="text-xl lg:text-3xl mt-4 italic text-light-grey font-thin">
            Join us in shaping the future of reality through immersive experiences and interdisciplinary collaboration.
          </h2>
          <div className="flex flex-auto w-full mt-20 justify-center lg:ml-40 lg:justify-start">
            <button className="bg-black text-white px-8 lg:px-20 py-2">Learn More</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;