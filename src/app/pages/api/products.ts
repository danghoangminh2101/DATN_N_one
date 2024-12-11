import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get("https://api-core.dsp.one/api/auth/product", {
      headers: {
        Accept: "application/json",
      },
    });

    res.status(200).json(response.data); // Trả dữ liệu về frontend
  } catch (error: any) {
    console.error("Error fetching data:", error.response?.status, error.response?.data);
    res.status(error.response?.status || 500).json({
      message: error.response?.data || "Error fetching data",
    });
  }
}