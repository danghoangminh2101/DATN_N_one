import axios from "axios";

export const getProductDetailApi = async (id: number) => {
  if (!id) throw new Error("Product ID is required");

  const { data } = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://api-core.dsp.one/api/auth/product/${id}`
  );

  return data?.data; // Trả về dữ liệu sản phẩm
};
