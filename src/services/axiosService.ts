import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_API_URL;
const apiKey = import.meta.env.VITE_APP_API_KEY;

const auth = {
  getHeaders(setToken?: string) {
    const token = setToken || apiKey;
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    };
  },
};

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: auth.getHeaders(),
});

export default AxiosInstance;
