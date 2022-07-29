import axios from "axios";
import { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export const getCharacters: () => Promise<AxiosResponse> = (page: number = 1) => {
  return axios.get(`/character?page=${page}`);
};

export const getCharacter: (id: number) => Promise<AxiosResponse> = (id: number) => {
  return axios.get(`/character/${id}`);
};

export const getLocations: () => Promise<AxiosResponse> = (page: number = 1) => {
  return axios.get(`/location?page=${page}`);
};

export const getLocation: (id: number) => Promise<AxiosResponse> = (id: number) => {
  return axios.get(`/location/${id}`);
}

export const getEpisodes: () => Promise<AxiosResponse> = (page: number = 1) => {
  return axios.get(`/episode?page=${page}`);
}

export const getEpisode: (id: number) => Promise<AxiosResponse> = (id: number) => {
  return axios.get(`/episode/${id}`);
}
