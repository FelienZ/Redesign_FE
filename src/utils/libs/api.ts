import axios from 'axios'
import { toast } from 'sonner'

const API_URL = import.meta.env.VITE_API_URL

export const ApiClient = axios.create({
    baseURL: `${API_URL}`,
    headers: {
        'Content-Type': 'application/json'
    }    
})

ApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Terjadi kesalahan pada server.';
    toast.error(message);
    return Promise.reject(error);
  }
)