import { axiosInstance } from "./axios.config";
import { getLocalStorageItem } from "../helpers/localStorage.helpers";

const token = `Bearer ${getLocalStorageItem("accessToken")}`;
axiosInstance.defaults.headers.common["Authorization"] = token;
// console.log(token);

const getUsers = async () => {
  return axiosInstance.get("/v1/users");
};

const getUserById = async (id) => {
  return axiosInstance.get(`/v1/users/${id}`);
};

const getUserByMail = async (mail) => {
  return axiosInstance.post(`/v2/users/mail`, { mail });
};

const createUser = async (user) => {
  return axiosInstance.post("/v1/users", user);
};

const updateUser = async (id, user) => {
  return axiosInstance.patch(`/v1/users/${id}`, user);
};

const deleteUser = async (id) => {
  return axiosInstance.delete(`/v1/users/${id}`);
};

const getUserByName = async (name) => {
  return axiosInstance.get(`/v2/users/name/${name}`);
}

const updateUserTeam = async (id, team) => {
  return axiosInstance.patch(`/v2/users/team_id/${id}/${team}`);
}

const updateNormalUser = async (id, user) => {
  return axiosInstance.patch(`/v2/users/normal/${id}`, user);
}

export {
  getUsers,
  getUserByMail,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByName,
  updateUserTeam,
  updateNormalUser,
};
