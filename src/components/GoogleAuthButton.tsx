import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
import { FaGoogle } from "react-icons/fa";

interface GoogleAuthButtonProps {
  statusText: string;
  proxyUrl: string;
}

const GoogleAuthButton = ({ statusText, proxyUrl }: GoogleAuthButtonProps) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (statusText === "Logout") {
      dispatch(logoutUser());
    }
  };
  return (
    <button
      onClick={handleOnClick}
      className="bg-blue-500 rounded-md h-[3em]  font-semibold w-full flex items-center"
    >
      <a
        href={proxyUrl}
        className="flex items-center justify-center gap-2 w-[100%]"
      >
        {statusText} {statusText ? <FaGoogle /> : null}
      </a>
    </button>
  );
};

export default GoogleAuthButton;
