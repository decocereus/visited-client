import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../features/authSlice";
import { googleAuthController } from "../utils/apiCalls";
import Spinner from "./Spinner";

const GoogleAuthHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const authenticationCode = urlParams.get("code");

  const handleGoogleAuthFlow = async () => {
    if (authenticationCode) {
      let response = await googleAuthController(authenticationCode);
      console.log(response);
      dispatch(loggedInUser(response));
      const googleId = response.googleId;
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleGoogleAuthFlow();
  }, [authenticationCode]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Spinner />
      <p className="font-bold md:text-4xl text-2xl gap-2 ml-4">
        Authenticating
      </p>
    </div>
  );
};

export default GoogleAuthHandler;
