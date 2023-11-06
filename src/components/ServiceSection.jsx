import React from "react";
import { FaCode } from "react-icons/fa";
import {
  AiOutlineRobot,
  AiOutlineHighlight,
  AiOutlineDesktop,
} from "react-icons/ai";
import { BsRobot } from "react-icons/bs";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex flex-col col-span-4 shadow-xl  p-5 transition-all  group hover:bg-turquoise rounded-md border">
        <p className="text-5xl text-turquoise opacity-70 group-hover:text-white">
          {icon}
        </p>
        <h1 className="font-formula text-2xl text-turquoise group-hover:text-white">
          {title}
        </h1>
        <p className="group-hover:text-white opacity-60 font-sans">
          {description}
        </p>
      </div>
    </>
  );
};

const ServiceSection = () => {
  const servicesName = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      icon: <AiOutlineHighlight />,
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      icon: <FaCode />,
    },
    {
      title: "Desktop Application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      icon: <AiOutlineDesktop />,
    },
    {
      title: "Deep Learning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      icon: <AiOutlineRobot />,
    },
    {
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      icon: <BsRobot />,
    },
    {
      title: "Machine Learning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      icon: <BsRobot />,
    },
  ];
  return (
    <div id="service" className="w-full flex flex-col justify-center">
      <div className="w-full flex justify-center items-center">
        <h1 className="absolute opacity-10 w-full text-center text-9xl font-formula text-turquoise">
          SERVICES.
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-28">
          <p className="text-lg">WHAT I DO!</p>
          <h1 className="font-formula text-5xl text-turquoise">Services</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%] grid grid-cols-12 gap-6">
          {servicesName.map((service, index) => {
            return <ServiceCard {...service} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
