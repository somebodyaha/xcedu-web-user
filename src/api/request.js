import { getToken, setToken, getRefreshToken, setRefreshToken } from '@/utils/token'
import router from '@router/index'
// create an axios instance
const instance = axios.create({
  /**
     * `baseURL` will be prepended to `url` unless `url` is absolute. It can be convenient to set `baseURL` for an instance of axios pass relative URLs to methods of that instance.
     */
  baseURL: process.env.WEB_REQUEST_BASE_URL,

  /**
     *
     */
  headers: {
    'Content-Type': 'application/json'
  },

  /**
     * `transformRequest` allows changes to the request data before it is sent to the server This is only applicable for request methods 'PUT', 'POST', and 'PATCH' The last function in the array must return a string or an instance of Buffer, ArrayBuffer, FormData or Stream
     */
  transformRequest: [function transformRequest (data) {
    // Do whatever you want to transform the data
    // return JSON.stringify(data)
    return JSON.stringify(data)
  }],

  /**
     * `transformResponse` allows changes to the response data to be made before it is passed to then/catch
     */
  transformResponse: [function transformResponse (data) {
    // Do whatever you want to transform the data
    return data.data
  }],

  /**
     * `responseType` indicates the type of data that the server will respond with options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
     */
  responseType: 'json'
})

instance.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(response => {
  if (response.data) {
    return response.data
  }
}, error => {
  if (error.response.status === 401) {
    const res = error.request.response
    if (res.code === 403) {
      // toke 过期 获取refresh token 重新请求token
      const refreshToken = getRefreshToken()
      return instance.post('/sys/refreshToken', { refreshToken: refreshToken }).then(res => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        const tokenNew = getToken()
        error.config.__isRetryRequest = true
        error.config.headers.Authorization = `Bearer ${tokenNew}`
        return instance.request(error.config)
      })
    } else {
      // 认证失败 或者token非法 跳回登录页
      setToken('')
      setRefreshToken('')
      router.repalce('/user/login')
    }
  }
  const reason = error.message
  return Promise.reject(reason)
})

export default instance
