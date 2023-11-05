import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col relative">
      <p className="text-lg">Hello! I'm</p>
      <h1 className="font-formula text-3xl text-turquoise">Jamal Muhammad</h1>
      <div className="absolute w-1/2 bg-turquoise opacity-25 top-0 right-0 h-screen"></div>
    </div>
  );
};

export default HeroSection;
