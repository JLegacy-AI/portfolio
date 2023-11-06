import React from "react";
import { SiFiverr } from "react-icons/si";
import {
  BiLogoTwitter,
  BiLogoUpwork,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagramAlt,
  BiLogoFacebookCircle,
} from "react-icons/bi";

import { BsLinkedin } from "react-icons/bs";

const ContactCards = ({ title, link, icon }) => {
  return (
    <div className="shadow-xl py-6 rounded-md ">
      <a
        href={link}
        className="h-full w-full flex justify-center items-center"
        target="_blank"
        rel="noreferrer border"
      >
        <div className="flex flex-col justify-center items-center p-5">
          <p className="">{icon}</p>
          {title !== "Fiverr" ? (
            <h1 className="font-formula text-2xl text-turquoise">{title}</h1>
          ) : (
            ""
          )}
        </div>
      </a>
    </div>
  );
};

const contactList = [
  {
    title: "Fiverr",
    link: "https://www.fiverr.com/mr___j",
    icon: <SiFiverr className="text-[#00b22d] text-9xl" />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jamal-muhammad-5b516a199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <BsLinkedin className="text-[#0077b5] text-6xl" />,
  },
  {
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~01144bcd947adb863e",
    icon: <BiLogoUpwork className="text-[#73bb44] text-7xl" />,
  },
  {
    title: "Github",
    link: "https://github.com/JLegacy-AI",
    icon: <BiLogoGithub className="text-black text-6xl" />,
  },
  {
    title: "Email",
    link: "mailto:jamal.webdev.ai@gmail.com",
    icon: <BiLogoGmail className="text-[#BB001B] text-6xl" />,
  },
  {
    title: "Twitter",
    link: "https://x.com/jamalaidev?t=P-la0j6My4dw8QKUF7sdEg&s=09",
    icon: <BiLogoTwitter className="text-[#00acee] text-6xl" />,
  },
  {
    title: "Instagram",
    link: "https://instagram.com/jlegacy_ai?igshid=MzMyNGUyNmU2YQ==",
    icon: <BiLogoInstagramAlt className="text-[#E4405F] text-6xl " />,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009508982394&mibextid=ZbWKwL",
    icon: <BiLogoFacebookCircle className="text-[#1877F2] text-6xl" />,
  },
];

const ContactSection = () => {
  return (
    <div id="contact" className="w-full flex flex-col justify-center mb-20">
      <div className="w-full flex justify-center items-center py-10">
        <h1 className="absolute opacity-10 w-full text-center text-9xl font-formula text-turquoise">
          CONTACT ME.
        </h1>
        <div className="w-full flex flex-col justify-center items-center mt-28">
          <p className="text-lg">How We Connect!</p>
          <h1 className="font-formula text-5xl text-turquoise">Contact Me.</h1>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-10 mx-10">
        {contactList.map((contact, index) => {
          return <ContactCards key={index} {...contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactSection;
