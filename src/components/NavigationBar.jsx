import React, { useState } from "react";

const NavigationBar = () => {
  return (
    <div className="absolute z-10 top-0 left-0 right-0 w-full h-16 flex justify-between items-center">
      <h1 className="font-formula text-3xl text-turquoise w-1/2 text-center">
        Jamal.
      </h1>
      <ul className="flex justify-center items-center gap-8 w-1/2 text-white ">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
