import axios from 'axios';

export const productApi = async () => {
  try {
    const response = await axios.get("/api/auth/product"); // Proxy qua Next.js
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};