import { axiosInstance } from "./axios.config";
import { getLocalStorageItem } from "../helpers/localStorage.helpers";

const token = `Bearer ${getLocalStorageItem("accessToken")}`;
axiosInstance.defaults.headers.common["Authorization"] = token;

const getAccounts = () => {
  return axiosInstance.get("/v1/accounts");
};

const getAccountById = async (id) => {
  return axiosInstance.get(`/v1/accounts/${id}`);
};

const createAccount = (account) => {
  return axiosInstance.post("/v1/accounts", account);
};

const updateAccount = (id, account) => {
  return axiosInstance.patch(`/v1/accounts/${id}`, account);
};

const deleteAccount = (id) => {
  return axiosInstance.delete(`/v1/accounts/${id}`);
};

export {
  getAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
