
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(
      'http://api-core.dsp.one/api/auth/product'
    )
    return res.status(200).json(response.data) // Trả dữ liệu về cho frontend
  } catch (error) {
    console.error('Error fetching data:', error)
    return res.status(500).json({ message: 'Có lỗi xảy ra khi lấy dữ liệu.' })
  }
}