import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../utils/apiCalls";
import { loggedInUser } from "../features/authSlice";
import GoogleAuthButton from "./GoogleAuthButton";
import UserCard from "./UserCard";

interface User {
  name: string;
  email: string;
  avatarurl: string;
  isverified: boolean;
  accessToken: string;
  refreshToken: string;
  googleId: string;
  id: number;
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const [authenticatedUser, setAuthenticatedUser] =
    useState<Partial<User> | null>(null);
  const fetchCurrentUser = async () => {
    console.log("Fetching current user");
    let response = await getCurrentUser();
    setAuthenticatedUser(response);
    dispatch(loggedInUser(response));
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="shadow-xl p-10">
      {authenticatedUser ? (
        <div className="flex flex-col gap-[2em]">
          <h2 className="font-bold text-4xl">You are authenticated</h2>
          <UserCard
            name={authenticatedUser?.name}
            email={authenticatedUser?.email}
            avatarUrl={authenticatedUser?.avatarurl}
            isVerified={authenticatedUser?.isverified}
          />
          <GoogleAuthButton statusText="Logout" proxyUrl="/auth/logout" />
        </div>
      ) : (
        <div>
          <h2>Fetching authentication status</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
