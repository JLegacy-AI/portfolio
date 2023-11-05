import React from "react";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div className="w-full h-screen ">
      <NavigationBar />
      <HeroSection />
    </div>
  );
};

export default Header;
