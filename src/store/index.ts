import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: ""
  },
  mutations: {
    updateNotification(state, content) {
      state.notification = content
    }
  },
  actions: {
    updateNotification({ commit }, content) {
      commit('updateNotification', content)
    }
  },
  modules: {
  }
})
