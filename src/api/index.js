import { axios } from 'xc-share'

export function getSiteConfig () {
  return axios.get('/api-sites/sites').then(({ data }) => data.siteConfig)
}

export function login (form) {
  return axios.post('/sysUserLogin/login', form)
}

export function sendVerifyCode (phone) {
  return axios.post('/send/verify/code', { phone })
}

export function verifyUser (post) {
  return axios.post('/verify/user', post).then(({ data }) => data)
}

export function resetPwd (post) {
  return axios.post('/user/password/reset', post)
}

// 主题设置
export function skinSubmit (skin) {
  return axios.put('/api-base/users/info', skin)
}
