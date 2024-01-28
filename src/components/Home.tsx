import React from "react";
import GoogleAuthButton from "./GoogleAuthButton";

const Home = () => {
  return (
    <div className="flex flex-col gap-[2em]">
      <h1 className="font-bold text-4xl">Login to view visited pages</h1>
      <GoogleAuthButton statusText="Login with" proxyUrl="/auth/google" />
    </div>
  );
};

export default Home;
