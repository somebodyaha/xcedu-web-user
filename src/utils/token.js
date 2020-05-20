export function getToken () {
  return localStorage.getItem('token') || ''
}

export function setToken (token) {
  localStorage.setItem('token', token)
}

export function getRefreshToken () {
  return localStorage.getItem('refreshToken') || ''
}

export function setRefreshToken (token) {
  localStorage.setItem('refreshToken', token)
}
