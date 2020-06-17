import request from './request'

export function getSiteConfig () {
  return request.get('/api-sites/sites').then(({ data }) => data.siteConfig)
}

export function login (form) {
  return request.post('/sysUserLogin/login', form)
}

export function sendVerifyCode (phone) {
  return request.post('/send/verify/code', { phone })
}

export function verifyUser (post) {
  return request.post('/verify/user', post).then(({ data }) => data)
}

export function resetPwd (post) {
  return request.post('/user/password/reset', post)
}
