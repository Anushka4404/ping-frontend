import axios from "axios";

// Use env variable for base URL, fallback to localhost
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
