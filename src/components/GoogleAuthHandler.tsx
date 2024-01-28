import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../features/authSlice";
import { googleAuthController } from "../utils/apiCalls";
import { runtime } from "webextension-polyfill";

const GoogleAuthHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const authenticationCode = urlParams.get("code");

  const sendGoogleIdToExtension = (googleId: string) => {
    const message = { type: "authUser", googleId: googleId };

    runtime.sendMessage(message).then(
      (response: any) => {
        // Handle the response from the content script
        console.log(response);
      },
      (error: any) => {
        // Handle the error if needed
        console.error(error);
      }
    );
  };

  const handleGoogleAuthFlow = async () => {
    if (authenticationCode) {
      let response = await googleAuthController(authenticationCode);
      console.log(response);
      dispatch(loggedInUser(response));
      const googleId = response.googleId;
      sendGoogleIdToExtension(googleId);

      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleGoogleAuthFlow();
  }, [authenticationCode]);

  return <div>Authenticating</div>;
};

export default GoogleAuthHandler;
