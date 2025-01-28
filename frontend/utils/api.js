import axios from "axios";
import { serverUrl } from "@/app/register/utils/urls";

const api = axios.create({
  baseURL: `${serverUrl}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
