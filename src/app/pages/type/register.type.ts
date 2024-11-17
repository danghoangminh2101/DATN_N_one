import axios from 'axios';

export const register = async (data:any) => {
  try {
    const response = await axios.post('http://api-core.dsp.one/api/auth/user/regsiter',data); // Thay URL bằng API của bạn
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const listUsers = async () => {
  try {
    const response = await axios.get('http://api-core.dsp.one/api/auth/user?page=1&per_page=5&filter%5Bname%5D=John&filter%5Bemail%5D=john%40example.com&sort=-created_at'); // Thay URL bằng API của bạn
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

