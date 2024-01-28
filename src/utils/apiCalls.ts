import axios from "axios";

export const getCurrentUser = async () => {
  try {
    let response = await axios.get(
      "http://localhost:4500/api/v1/auth/getCurrentUser" //"https://visited-server-backend.onrender.com/api/v1/auth/getCurrentUser"
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getVisitedUrls = async () => {
  try {
    let response = await axios.get(
      "http://localhost:4500/api/v1/database/getVisitedURLs" //`https://visited-server-backend.onrender.com/api/v1/database/getVisitedURLs`
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
