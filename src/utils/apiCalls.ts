import axios from "axios";

export const getCurrentUser = async () => {
  try {
    let response = await axios.get("http://localhost:3000/auth/getCurrentUser");
    console.log("Current user: ", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
