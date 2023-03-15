import { axiosInstance } from './axios.config';
export const login = async (mail, password) => {
  return axiosInstance
    .post(`/v1/auth/login`, {
      mail,
      password,
    });
};
