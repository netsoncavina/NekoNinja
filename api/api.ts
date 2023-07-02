import axios from "axios";
import {
  animeResponseSchema,
  recentAnimeSchema,
  searchResponseSchema,
  sourcesResponseSchema,
} from "../schemas/response-schema";

const enime = axios.create({ baseURL: "https://api.enime.moe", timeout: 4000 });

export const api = {
  getSearchResults: async ({
    query,
    page,
    perPage,
    signal,
  }: {
    query: string;
    perPage?: number;
    page?: number;
    signal?: AbortSignal;
  }) => {
    const { data } = await enime.get(`/search/${query}`, {
      params: { page, perPage },
      signal,
    });
    return searchResponseSchema.parse(data);
  },
  //   getEpisodeDetails: async ({
  //     episodeId,
  //     signal,
  //   }: {
  //     episodeId: string;
  //     signal?: AbortSignal;
  //   }) => {
  //     const { data } = await axiosInstance.get(`/episode/${episodeId}`, {
  //       signal,
  //     });
  //     return sourcesResponseSchema.parse(data);
  //   },
  getAnimeDetails: async ({
    animeId,
    signal,
  }: {
    animeId: string;
    signal?: AbortSignal;
  }) => {
    const { data } = await enime.get(`/anime/${animeId}`, { signal });
    return animeResponseSchema.parse(data);
  },
  getPopularAnime: async ({
    page,
    perPage,
    signal,
  }: {
    page?: number;
    perPage?: number;
    signal?: AbortSignal;
  }) => {
    const { data } = await enime.get("/popular", {
      params: { page, perPage },
      signal,
    });
    return searchResponseSchema.parse(data);
  },
  getRecentAnime: async ({
    page,
    perPage,
    signal,
  }: {
    page?: number;
    perPage?: number;
    signal?: AbortSignal;
  }) => {
    const { data } = await enime.get("/recent", {
      params: { page, perPage },
      signal,
    });
    return recentAnimeSchema.parse(data);
  },
};
