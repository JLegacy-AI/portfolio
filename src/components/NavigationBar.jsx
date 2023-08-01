import React from "react";

const NavigationBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-full h-16 flex justify-center items-center">
      <ul className="flex justify-end items-center gap-8">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
      </ul>
      <h1 className="font-poppins text-3xl mx-20 text-turquoise">Jamal.</h1>
      <ul className="flex justify-end items-center gap-8">
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
