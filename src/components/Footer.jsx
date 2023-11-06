import React from "react";

const Footer = () => {
  return (
    <div className="bg-white w-screen flex justify-center items-center h-12 text-sm border">
      <p>
        Copyright ©2023 All rights reserved | This template is made with by{" "}
        <a
          href="https://github.com/JLegacy-AI"
          className="border-b-2 font-semibold hover:opacity-50 border-turquoise"
          rel="noreferrer noopener"
          target="_blank"
        >
          Jlegacy-AI
        </a>
      </p>
    </div>
  );
};

export default Footer;
