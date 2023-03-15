import { axiosInstance } from "./axios.config";
import { getLocalStorageItem } from "../helpers/localStorage.helpers";

const token = `Bearer ${getLocalStorageItem("accessToken")}`;
axiosInstance.defaults.headers.common["Authorization"] = token;

const getUsers = async () => {
  return axiosInstance.get('/v1/users');
}

const getUserByMail = async (mail) => {
  return axiosInstance.post(`/v2/users/mail`, { mail });
};

const createUser = async (user) => {
  return axiosInstance.post('/v1/usesr', user);
}

export {getUsers ,getUserByMail, createUser};