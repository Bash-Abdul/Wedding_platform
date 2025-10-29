import axios from "axios";

export const api = axios.create({
  baseURL: "/",
  withCredentials: true, // send cookies for auth sessions
  headers: { "Content-Type": "application/json" },
});

// optional, normalize errors
api.interceptors.response.use(
  res => res,
  err => {
    const message =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "Request failed";
    return Promise.reject(new Error(message));
  }
);
