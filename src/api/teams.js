import { axiosInstance } from "./axios.config";
import { getLocalStorageItem } from "../helpers/localStorage.helpers";

const token = `Bearer ${getLocalStorageItem("accessToken")}`;
axiosInstance.defaults.headers.common["Authorization"] = token;
// console.log(token);

const getTeams = async () => {
  return axiosInstance.get("/v1/teams");
};

const getTeamById = async (id) => {
  return axiosInstance.get(`/v1/teams/${id}`);
};

const createTeam = async (team) => {
  return axiosInstance.post("/v1/teams", team);
};

const updateTeam = async (id, team) => {
  return axiosInstance.patch(`/v1/teams/${id}`, team);
};

const deleteTeam = async (id) => {
  return axiosInstance.delete(`/v1/teams/${id}`);
};

export { getTeams, getTeamById, createTeam, updateTeam, deleteTeam };
