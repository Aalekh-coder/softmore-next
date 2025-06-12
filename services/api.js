import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000, // Optional: Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here (e.g., authorization tokens)
  },
});
export default api;