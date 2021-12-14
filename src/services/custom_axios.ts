import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
    
    // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  },
});

axiosInstance.interceptors.request.use((config:any) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers["Authorization"] = `Bearer ${
    accessToken && JSON.parse(accessToken)
  }`;
  return config;
});

export default axiosInstance;