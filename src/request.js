import axios from 'axios'

const service = axios.create({
  baseURL: "/",
  timeout: 0
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加请求头参数
    // config.headers[''] = ""
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 拦截成功的数据
    return response.data
  },
  error => {
    // 拦截失败的数据
    return Promise.reject(error)
  }
)

export default service;
