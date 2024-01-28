import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center mb-2 border-t-1 py-2">
      <p className="font-bold text-md text-gray-10">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/amartyasingh07/"
          target="_blank"
          rel="noreferrer"
        >
          @Amartya Singh
        </a>
      </p>
    </div>
  );
};

export default Footer;
