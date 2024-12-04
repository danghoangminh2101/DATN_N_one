import { corsNextjs } from "@/app/components/utils/utils"
import axios from "axios"

export const getUserDetailApi=async()=>{
    const response=await axios.get(`${corsNextjs}/https://api-core.dsp.one/api/auth/user?page=1&per_page=5&filter%5Bname%5D=John&filter%5Bemail%5D=john%40example.com&sort=-created_at`)
    return response.data
}

