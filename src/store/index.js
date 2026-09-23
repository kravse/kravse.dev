import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: "",
    promptInject: false
  },
  mutations: {
    updateNotification(state, content) {
      state.notification = content
    },
    togglePromptInject(state) {
      state.promptInject = !state.promptInject
    }
  },
  actions: {
    updateNotification({ commit }, content) {
      commit('updateNotification', content)
    },
    togglePromptInject({ commit }) {
      commit('togglePromptInject')
    }
  },
  modules: {
  }
})
