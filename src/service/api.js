import axios from "axios"

export const api = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL: "https://pelatihan-micro-wahyu-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)
