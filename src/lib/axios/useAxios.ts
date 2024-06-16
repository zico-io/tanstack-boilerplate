import axios from 'axios'

export const useAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'X-Appwrite-Project': import.meta.env.VITE_API_ID as string,
    'Content-Type': 'application/json',
  },
})

export { isAxiosError } from 'axios'
