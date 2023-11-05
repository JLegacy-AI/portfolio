import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-1/2 h-full flex justify-center items-center flex-col">
        <p className="text-xl">Hello! I'm</p>
        <h1 className="font-formula text-6xl text-turquoise flex justify-center items-center">
          <span>Jamal</span>
        </h1>
        <h1 className="font-formula text-6xl text-turquoise flex justify-center items-center">
          Muhammad
        </h1>
      </div>
      <div className="absolute w-1/2 bg-turquoise top-0 right-0 h-screen"></div>
    </div>
  );
};

export default HeroSection;
