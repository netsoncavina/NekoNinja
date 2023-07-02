import axios from "axios";
let baseUrl = "https://api.enime.moe";

export const getPopularAnimes = async () => {
  const response = await axios.get(`${baseUrl}/popular`);
  return response.data;
};

export const getRecentAnimes = async () => {
  const response = await axios.get(`${baseUrl}/recent`);
  return response.data;
};
