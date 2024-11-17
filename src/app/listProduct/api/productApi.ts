import axios from 'axios';

export const productApi = async () => {
  try {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/product');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};