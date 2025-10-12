import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import resume from "../assets/resume.pdf"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-1 ">
      <div className="flex flex-shrink-0 items-center ">
        <img className="mx-2 w-32 hover:cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center gap-4 text-2xl m-12 items-center">
        <a href="https://www.linkedin.com/in/vishu23/">
          <FaLinkedin className="hover:cursor-pointer " />
        </a>
        <a href="https://github.com/iamvishukr">
          <FaGithub className="hover:cursor-pointer" />
        </a>
        <a href="https://x.com/iamvishukr">
          <FaSquareXTwitter className="hover:cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/iamvishukr/">
          <FaInstagram className="hover:cursor-pointer" />
        </a>
      <a
          href={resume}
          download="Vishal_Resume.pdf"
          className="text-black border-2 py-2 px-6 focus:outline-none bg-yellow-500 border-yellow-600 rounded text-lg text-center w-full sm:w-auto"
        >
          Download Resume
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
