import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  counters: {
    1: {
      id: 1,
      count: 20,
    },
    2: {
      id: 2,
      count: 20,
    },
  },
};

const mutations = {
  increment (state, { id }) {
    state.counters[id].count++
  },
  decrement (state, { id }) {
    state.counters[id].count--
  }
}

const actions = {
  increment: ({ commit }, { id }) => { 
    commit('increment', { id })
  },
  decrement: ({ commit }, { id }) => { 
    commit('decrement', { id })
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
});