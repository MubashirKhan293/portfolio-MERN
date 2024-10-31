import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h3 className="mx-2 w-10">Mk</h3>
      </div>
      <div className="flex gap-4 justify-center items-center m-8 text-2xl">
        <a 
        target="_blank" 
        href="https://github.com/MubashirKhan293">
          {" "}
          <FaGithub />
        </a>
        <a 
        target="_blank" 
        href="https://www.linkedin.com/in/mubashir-khan1">
          {" "}
          <FaLinkedin />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
