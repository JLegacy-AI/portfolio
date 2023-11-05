import React, { useState } from "react";

const NavigationBar = () => {
  return (
    <div className="absolute z-10 top-0 left-0 right-0 w-full h-16 flex justify-between items-center">
      <h1 className="font-formula text-3xl text-turquoise w-1/2 text-center">
        Jamal.
      </h1>
      <ul className="flex justify-center items-center gap-8 w-1/2 text-white ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
