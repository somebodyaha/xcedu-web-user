import { getSiteConfig } from '@/api'

const state = {
  config: {
    logo: '',
    company: '',
    copyright: ''
  },
  loaded: false
}

const getters = {}

const mutations = {
  initialize (state, payload) {
    state.config = payload
    state.loaded = true
  }
}

const actions = {
  loadConfig (store) {
    // if ((window.singleSpaNavigate && window.singleSpaVue) || store.state.loaded) {
    if (store.state.loaded) {
      return store.state.config
    }
    return getSiteConfig().then(config => {
      store.commit('initialize', config)
      return config
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
