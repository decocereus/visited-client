import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../features/authSlice";
import { googleAuthController } from "../utils/apiCalls";

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
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleGoogleAuthFlow();
  }, [authenticationCode]);

  return <div>Authenticating</div>;
};

export default GoogleAuthHandler;
