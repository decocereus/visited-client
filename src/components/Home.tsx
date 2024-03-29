import React from "react";
import GoogleAuthButton from "./GoogleAuthButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[2em] mt-[5em] w-full h-[70%]">
      <h1 className="font-bold text-xl md:text-4xl">
        Login to view visited pages
      </h1>
      <GoogleAuthButton
        statusText="Login with"
        proxyUrl="https://visited-server-backend.onrender.com/api/v1/auth/google"
      />
    </div>
  );
};

export default Home;
