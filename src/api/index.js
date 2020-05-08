import request from './request'

export function getSiteConfig () {
  return request.get('/sites/current/config').then(({ data }) => data.siteConfig)
}

export function login (post) {
  return request.post('/user/login', post).then(({ data }) => {
    const { token, user, profile } = data
    return { token, user, profile }
  })
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
