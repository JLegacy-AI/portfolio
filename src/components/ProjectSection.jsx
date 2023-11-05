import React from "react";
import PROJECT_1 from "../images/projects/1.avif";
import PROJECT_2 from "../images/projects/2.jpg";
import PROJECT_3 from "../images/projects/3.webp";
import PROJECT_4 from "../images/projects/4.jpg";
import PROJECT_5 from "../images/projects/5.jpg";
import PROJECT_6 from "../images/projects/6.jpg";

const ProjectCards = ({ ImageUrl, Index }) => {
  return (
    <div className="relative group border border-white">
      <img src={ImageUrl} alt="" />
      <div className="absolute w-full h-full bg-black top-0 left-0 right-0 bottom-0 opacity-50 group-hover:opacity-0 flex justify-center items-center">
        <h1 className="font-kusanagi text-6xl text-white">{Index + 1}</h1>
      </div>
    </div>
  );
};

const InfoCards = ({ title, number }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 p-5 shadow-lg ">
      <p className="text-turquoise font-poppins font-bold text-4xl">
        {number}.
      </p>
      <p>{title}</p>
    </div>
  );
};

const projects = [
  {
    ImageUrl: PROJECT_1,
  },
  {
    ImageUrl: PROJECT_2,
  },
  {
    ImageUrl: PROJECT_3,
  },
  {
    ImageUrl: PROJECT_4,
  },
  {
    ImageUrl: PROJECT_5,
  },
  {
    ImageUrl: PROJECT_6,
  },
];

const infos = [
  {
    title: "Awards Won",
    number: 10,
  },
  {
    title: "Complete Projects",
    number: 30,
  },
  {
    title: "Happy Customers",
    number: 27,
  },
  {
    title: "Running Projects",
    number: 15,
  },
];

const ProjectSection = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex justify-center items-center py-10">
        <h1 className="absolute opacity-10 w-full text-center text-9xl font-formula text-turquoise">
          PROJECTS.
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-28">
          <p className="text-lg">WHAT I Did!</p>
          <h1 className="font-formula text-5xl text-turquoise">Projects</h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {projects.map((project, index) => {
          return <ProjectCards key={index} Index={index} {...project} />;
        })}
      </div>
      <div className="grid grid-cols-4 gap-10 m-20">
        {infos.map((info, index) => {
          return <InfoCards key={index} {...info} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
