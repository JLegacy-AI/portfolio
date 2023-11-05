import React from "react";
import HERO_SECTION_IMAGE from "../images/portfolio-image.webp";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative flex">
      <div className="w-1/2 h-full flex justify-center items-center flex-col">
        <p className="text-xl">Hello! I'm</p>
        <h1 className="font-formula text-6xl text-turquoise flex justify-center items-center">
          <span>Jamal</span>
        </h1>
        <h1 className="font-formula text-6xl text-turquoise flex justify-center items-center">
          Muhammad
        </h1>
      </div>
      <div className="relative w-1/2">
        <img
          className="absolute bg-turquoise top-0 right-0 h-screen"
          src={HERO_SECTION_IMAGE}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
