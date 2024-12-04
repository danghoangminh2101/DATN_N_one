import axios from 'axios';

export const postOrderApi = async (orderData) => {
  try {
    const response = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/order',
      orderData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.status === 200) {
      return response;  
    }
    
    throw new Error('Đặt hàng thất bại');
  } catch (error) {
    throw error; 
  }
};
