import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { HeaderProps } from "../lib/definitions";

const Header = ({ handleThemeChange }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] px-5 py-[1em] bg">
      <div className="flex justify-between w-[5em]">
        <label className="flex items-center gap-2 cursor-pointer">
          <MdDarkMode size={25} onClick={handleThemeChange} />
        </label>
        <label className="flex items-center gap-2  cursor-pointer">
          <CiLight size={25} onClick={handleThemeChange} />
        </label>
      </div>
      <div className="flex items-center justify-between w-[10em]">
        <a
          href="https://www.linkedin.com/in/amartyasingh07/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/decocereus"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
        <a
          href=" https://drive.google.com/file/d/1-4h2TFpg1-4fqqkKHYZ4EDp8BO3wZ6yO/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <FaRegFilePdf size={25} />
        </a>
      </div>
    </div>
  );
};

export default Header;
