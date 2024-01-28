import React from "react";
import GoogleAuthButton from "./GoogleAuthButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[2em] mt-[5em] w-full">
      <h1 className="font-bold text-xl md:text-4xl">
        Login to view visited pages
      </h1>
      <GoogleAuthButton statusText="Login with" proxyUrl="/auth/google" />
    </div>
  );
};

export default Home;
