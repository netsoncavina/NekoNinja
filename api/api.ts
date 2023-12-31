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

export const getAnimeInfo = async (title: string) => {
  const response = await axios.get(`${baseUrl}/anime/${title}`);
  return response.data;
};

export const searchAnime = async (title: string) => {
  const response = await axios.get(`${baseUrl}/search/${title}`);
  return response.data;
};

export const getEpisodeInfo = async (id: string) => {
  const response = await axios.get(`${baseUrl}/episode/${id}`);
  return response.data;
};
