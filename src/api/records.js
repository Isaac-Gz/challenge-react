import { axiosInstance } from "./axios.config";
import { getLocalStorageItem } from "../helpers/localStorage.helpers";

const token = `Bearer ${getLocalStorageItem("accessToken")}`;
axiosInstance.defaults.headers.common["Authorization"] = token;
// console.log(token);

const getRecords = async () => {
  return axiosInstance.get("/v1/records");
};

const getRecordById = async (id) => {
  return axiosInstance.get(`/v1/records/${id}`);
};

const createRecord = async (record) => {
  return axiosInstance.post("/v1/records", record);
};

const updateRecord = async (id, record) => {
  return axiosInstance.patch(`/vi/records/${id}`, record);
};

const deleteRecord = async (id) => {
  return axiosInstance.delete(`/v1/records/${id}`);
};

const getRecordsByUser = async (id) => {
  return axiosInstance.get(`/v2/records/user/${id}`);
};

const getRecordsByOldTeam = async (id) => {
  return axiosInstance.get(`/v2/records/old_team/${id}`);
};

const getRecordsByStartDate = async (date) => {
  return axiosInstance.get(`/v2/records/start_date/${date}`);
};

const getRecordsByEndDate = async (date) => {
  return axiosInstance.get(`/v2/records/end_date/${date}`);
};

export {
  getRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord,
  getRecordsByUser,
  getLocalStorageItem,
  getRecordsByOldTeam,
  getRecordsByStartDate,
  getRecordsByEndDate,
};
