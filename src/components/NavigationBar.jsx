import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const NavigationBar = () => {
  return (
    <div
      id="home"
      className="absolute z-10 top-0 left-0 right-0 w-full h-16 flex justify-between items-center"
    >
      <h1 className="font-formula text-3xl text-turquoise w-1/2 text-center">
        Jamal.
      </h1>
      <ul className="flex justify-center items-center gap-8 w-1/2 text-white ">
        <li>
          <Link
            className="cursor-pointer"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link
        className="fixed bottom-6 right-6 cursor-pointer w-[40px] h-[40px] bg-white text-turquoise rounded-md shadow-2xl shadow-turquoise text-xl flex justify-center items-center hover:bg-turquoise hover:text-white"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <AiOutlineArrowUp />
      </Link>
    </div>
  );
};

export default NavigationBar;
