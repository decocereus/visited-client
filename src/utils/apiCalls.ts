import axios from "axios";

export const getCurrentUser = async () => {
  try {
    let response = await axios.get(
      "https://visited-client.vercel.app//auth/getCurrentUser"
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
      `https://visited-client.vercel.app/database/getVisitedURLs`
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
