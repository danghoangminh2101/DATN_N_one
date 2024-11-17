import axios from 'axios';

export const sigin = async (data:any) => {
  try {
    const response = await axios.post('http://api-core.dsp.one/auth/login',data); // Thay URL bằng API của bạn
    return response
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

