import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { UserCardProps } from "../lib/definitions";
import GoogleAuthButton from "./GoogleAuthButton";

const UserCard = ({ name, email, avatarUrl, isVerified }: UserCardProps) => {
  return (
    <div className="flex flex-col gap-[2em] shadow-2xl shadow-blue-500/20 p-5 sm:p-10">
      <h2 className="font-bold text-2xl md:text-4xl w-full">
        You are authenticated
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-2 rounded-md gap-2">
        <div>
          <img
            src={`${avatarUrl}`}
            alt="user-profile"
            className="w-[4em] h-[4em]"
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="font-semibold">{email}</p>
          <p className="font-semibold flex items-center gap-1">
            Status: {isVerified ? "Verified" : "Not Verified"}
            {isVerified ? <CiCircleCheck /> : null}
          </p>
        </div>
      </div>
      <GoogleAuthButton statusText="Logout" proxyUrl="/auth/logout" />
    </div>
  );
};

export default UserCard;
