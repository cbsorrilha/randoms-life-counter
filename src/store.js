import Vue from 'vue';
import Vuex from 'vuex';
import { getState, setState, initialState, resetState } from './storage';

Vue.use(Vuex);

const state = getState();

const mutations = {
  increment (state, { id }) {
    state.counters[id].count++
    setState(state);
  },
  decrement (state, { id }) {
    state.counters[id].count--
    setState(state);
  },
  reset () {
    state.counters = initialState.counters;
    resetState();
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
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
});