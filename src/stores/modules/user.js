import { login, sendVerifyCode, verifyUser, resetPwd } from '@/api'

import { setToken } from '@/utils/token'

const state = {
  token: '',
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
  }
}

const actions = {
  login ({ commit }, post) {
    return login(post).then(data => {
      commit('setToken', data.token)
      commit('setProfile', data.profile)
      commit('setUser', data.user)
      commit('setStatus', true)
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
