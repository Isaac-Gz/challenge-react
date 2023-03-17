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

export {
  getUsers,
  getUserByMail,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
