import { login, sendVerifyCode, verifyUser, resetPwd } from '@/api'

import { setToken, setRefreshToken } from '@/utils/token'

const state = {
  token: '',
  refreshToken: '',
  currentUser: {
    id: '',
    account: '',
    role: ''
  },
  profile: {
    theme: 'blue',
    layout: 'coalesce' // standalone or coalesce
  },
  loaded: false
}

const getters = {}

const mutations = {
  setUser (state, payload) {
    state.currentUser = payload
  },
  setProfile (state, payload) {
    state.profile = payload
  },
  setToken (state, token) {
    setToken(token)
    state.token = token
  },
  setStatus (state, payload = false) {
    state.loaded = payload
  },
  setRefreshToken (state, refreshToken) {
    setRefreshToken(refreshToken)
    state.refreshToken = refreshToken
  }
}

const actions = {
  login ({ commit }, post) {
    return login(post).then(data => {
      commit('setToken', data.access_token)
      commit('setProfile', data.profile)
      commit('setUser', data.user)
      commit('setStatus', true)
      commit('setRefreshToken', data.refresh_token)
      return data
    })
  },
  sendVerifyCode (store, phone) {
    return sendVerifyCode(phone)
  },
  verifyUser ({ commit }, post) {
    return verifyUser(post).then(({ id }) => {
      commit('setUser', { id })
      return id
    })
  },
  resetPwd (store, post) {
    return resetPwd(post)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
