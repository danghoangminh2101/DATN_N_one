import axios from "axios";

export const productApi = async () => {
  try {
    const response = await axios.get("http://api-core.dsp.one/api/auth/user?page=1&per_page=20&name=John&email=john%40example.com&sort=-created_at"); // Proxy đến handler của Next.js
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Có thể ném lỗi nếu cần
  }
};