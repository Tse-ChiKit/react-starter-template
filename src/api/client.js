import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 5000,
});

// 请求拦截
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截
client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    Promise.reject(error.response?.data || error.message);
  }
);

export default client;
