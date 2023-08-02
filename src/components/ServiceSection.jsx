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

const ServiceCard = ({ icon, heading, technologies }) => {
  return (
    <>
      <div className="w-1/2 flex justify-center items-center my-4">
        <div className="flex flex-col min-w-[300px] w-[450px] h-[200px] bg-white rounded-md p-3 border">
          <div className="flex justify-start items-center space-x-3">
            <div className="w-[40px] h-[40px] bg-turquoise flex justify-center items-center rounded-full text-white">
              {icon}
            </div>
            <h1 className="text-xl text-turquoise">{heading}</h1>
          </div>
          <div className="flex flex-col my-3">
            <h1 className="px-3 rounded-md bg-turquoise text-white w-fit">
              Technologies
            </h1>
            <div className="flex flex-wrap text-3xl mt-4 gap-5 px-1">
              {technologies.map((e, i) => {
                return e;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: <FaCode />,
      heading: "Web Development",
      technologies: [
        <FaHtml5 className="text-html5" />,
        <FaCss3Alt className="text-css3" />,
        <SiTailwindcss className="text-twitter" />,
        <SiMongodb className="text-mongodb" />,
        <FaReact className="text-reactjs" />,
        <SiExpress className="text-mongodb" />,
        <FaNode className="text-mongodb" />,
        <SiJquery className="text-jquery" />,
        <FaPhp className="text-php" />,
      ],
    },
    {
      icon: <FaCode />,
      heading: "Web Development",
      technologies: [
        <FaHtml5 className="text-html5" />,
        <FaCss3Alt className="text-css3" />,
        <SiTailwindcss className="text-twitter" />,
        <SiMongodb className="text-mongodb" />,
        <FaReact className="text-reactjs" />,
        <SiExpress className="text-mongodb" />,
        <FaNode className="text-mongodb" />,
        <SiJquery className="text-jquery" />,
        <FaPhp className="text-php" />,
      ],
    },
    {
      icon: <FaCode />,
      heading: "Web Development",
      technologies: [
        <FaHtml5 className="text-html5" />,
        <FaCss3Alt className="text-css3" />,
        <SiTailwindcss className="text-twitter" />,
        <SiMongodb className="text-mongodb" />,
        <FaReact className="text-reactjs" />,
        <SiExpress className="text-mongodb" />,
        <FaNode className="text-mongodb" />,
        <SiJquery className="text-jquery" />,
        <FaPhp className="text-php" />,
      ],
    },
    {
      icon: <FaCode />,
      heading: "Web Development",
      technologies: [
        <FaHtml5 className="text-html5" />,
        <FaCss3Alt className="text-css3" />,
        <SiTailwindcss className="text-twitter" />,
        <SiMongodb className="text-mongodb" />,
        <FaReact className="text-reactjs" />,
        <SiExpress className="text-mongodb" />,
        <FaNode className="text-mongodb" />,
        <SiJquery className="text-jquery" />,
        <FaPhp className="text-php" />,
      ],
    },
  ];
  return (
    <div className="w-screen px-20">
      <div className="w-full flex justify-center items-center">
        <h1 className="absolute opacity-10 w-full text-center text-9xl font-formula text-turquoise">
          SERVICES
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-28">
          <p className="text-lg">WHAT I DO!</p>
          <h1 className="font-formula text-4xl text-turquoise">My Services</h1>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between items-center mt-10">
        {services.map((e, i) => {
          return <ServiceCard {...e} />;
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
