import type { AxiosError } from 'axios'
import axios from 'axios'

const requests = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20 * 1000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  config = config || {}
  return config
})

requests.interceptors.response.use(
  (resp) => {
    return Promise.resolve(resp)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export default requests
