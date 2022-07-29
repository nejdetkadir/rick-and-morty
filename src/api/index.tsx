import axios from "axios";
import { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

const getCharacters: () => Promise<AxiosResponse> = (page: number = 1) => {
  return axios.get(`/character?page=${page}`);
};

const getCharacter: (id: number) => Promise<AxiosResponse> = (id: number) => {
  return axios.get(`/character/${id}`);
};

const getLocations: () => Promise<AxiosResponse> = (page: number = 1) => {
  return axios.get(`/location?page=${page}`);
};

const getLocation: (id: number) => Promise<AxiosResponse> = (id: number) => {
  return axios.get(`/location/${id}`);
}

const getEpisodes: () => Promise<AxiosResponse> = (page: number = 1) => {
  return axios.get(`/episode?page=${page}`);
}

const getEpisode: (id: number) => Promise<AxiosResponse> = (id: number) => {
  return axios.get(`/episode/${id}`);
}

module.exports = {
  getCharacters,
  getCharacter,
  getLocations,
  getLocation,
  getEpisodes,
  getEpisode
}
