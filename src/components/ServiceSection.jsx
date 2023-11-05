import React from "react";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJquery } from "react-icons/si";
import { WEB_DEVELOPMENT } from "../utils/contants";

const ServiceSection = () => {
  const servicesName = [
    "Deep Learning",
    "Machine Learnig",
    "Web Development",
    "Desktop Application",
  ];
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        <h1 className="absolute opacity-10 w-full text-center text-9xl font-formula text-turquoise">
          SERVICES
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-28">
          <p className="text-lg">WHAT I DO!</p>
          <h1 className="font-formula text-4xl text-turquoise">My Services</h1>
        </div>
      </div>
      <div className="flex justify-end w-full"></div>
    </div>
  );
};

export default ServiceSection;
