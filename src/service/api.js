import axios from "axios"

export const api = axios.create({
  baseURL: "https://workshop-micro-smk-backend-expressj.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)
