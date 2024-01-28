import axios from "axios";

export const getVisitedUrls = async (googleId: string) => {
  try {
    let response = await axios.get(
      `https://visited-server-backend.onrender.com/api/v1/database/getVisitedURLs?googleId=${googleId}`
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      return [];
    }
  } catch (err) {
    console.error(err);
  }
};

export const googleAuthController = async (authenticationCode: string) => {
  try {
    const response = await axios.get(
      `https://visited-server-backend.onrender.com/api/v1/auth/google/callback?code=${authenticationCode}`
    );
    return response.data;
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    // Handle error
    return null;
  }
};
