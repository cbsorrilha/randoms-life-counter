import Vue from 'vue'
import Vuex from 'vuex'
import { getState, setState, rawState, resetState } from './storage'

Vue.use(Vuex)
const state = Object.assign({}, getState())

const mutations = {
  increment (state, { id }) {
    state.counters = Object.assign({}, state.counters, {
      [id]: Object.assign({}, state.counters[id], {
        count: state.counters[id].count + 1
      })
    })
    setState(state)
  },
  decrement (state, { id }) {
    state.counters = Object.assign({}, state.counters, {
      [id]: Object.assign({}, state.counters[id], {
        count: state.counters[id].count - 1
      })
    })
    setState(state)
  },
  reset () {
    state.counters = Object.assign({}, rawState.counters)
    resetState()
  }
}

const actions = {
  increment: ({ commit }, { id }) => {
    commit('increment', { id })
  },
  decrement: ({ commit }, { id }) => {
    commit('decrement', { id })
  },
  reset: ({ commit }) => {
    commit('reset')
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
