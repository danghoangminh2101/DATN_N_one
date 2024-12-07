
export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api-core.dsp.one/api/auth/product", {
      headers: {
        // Sao chép các header cần thiết nếu backend yêu cầu
        Accept: "application/json",
      },
    });

    // Trả lại dữ liệu từ backend tới frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ message: "Error fetching data" });
  }
}