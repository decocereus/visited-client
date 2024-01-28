import React from "react";
import { CiCircleCheck } from "react-icons/ci";

interface UserCardProps {
  name: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
  isVerified: boolean | undefined;
}

const UserCard = ({ name, email, avatarUrl, isVerified }: UserCardProps) => {
  console.log(isVerified);
  return (
    <div className="flex items-center justify-between w-full p-2 rounded-md ">
      <div>
        <img src={`${avatarUrl}`} alt="user-profile" />
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
  );
};

export default UserCard;
