import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.CRM_URL,
});
