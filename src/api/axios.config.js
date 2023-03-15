import axios from 'axios';

const HOST = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL: HOST,
});
// TODO add interceptors when it is needed
export { axiosInstance };
