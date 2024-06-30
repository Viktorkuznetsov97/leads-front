import axios from "../utils/axios";

export const getStateAPI = async () => axios.get("/state/");

export const postStateAPI = async (newState) => axios.post("/state/", newState);

export const patchStateAPI = async (stateId, stateData) =>
  axios.patch(`/state/${stateId}/`, stateData);

export const deleteStateAPI = async (stateId) =>
  axios.delete(`/state/${stateId}/`);
