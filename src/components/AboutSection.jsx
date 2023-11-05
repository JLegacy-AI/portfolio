import React from "react";
import { ABOUT_IMAGE } from "../utils/contants";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" flex justify-end items-center mr-20">
        <div className="h-80 w-60 bg-turquoise overflow-hidden">
          {/* <img
            className="h-full -translate-x-5"
            src={ABOUT_IMAGE}
            alt="Jamal. Image"
          /> */}
        </div>
      </div>
      <div className="w-[400px] space-y-5 ml-20">
        <h1 className="absolute opacity-10 translate-x-[-10px] translate-y-[-50px] text-9xl font-formula text-turquoise">
          ABOUT
        </h1>
        <h2 className="text-xl ">
          Hi! I'm{" "}
          <span className="font-formula text-turquoise">Jamal Muhammad</span>
        </h2>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          officia excepturi, sunt aliquam maiores a necessitatibus vero! Ducimus
          libero, similique obcaecati alias a magnam ab sed animi, ad eos
          accusamus.
        </p>
        <a className="block text-turquoise font-light" href="/">
          Checkout my Profiles
        </a>
        <div className="flex gap-3 text-5xl">
          <FaTwitterSquare className="text-twitter" />
          <FaLinkedin className="text-linkedin" />
          <FaGithubSquare />
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="text-turquoise font-semibold">Contact me here!</h1>
          <div>
            <div>
              <span>Email: </span>
              <a className="text-turquoise" href="/">
                jamalmuhammad.bsaif20@iba-suk.edu.pk
              </a>
            </div>
            <div>
              <span>Phone: </span>
              <a href="/">
                <span className="text-green-900">+92 </span>
                <span className="text-turquoise">307 7923020</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
