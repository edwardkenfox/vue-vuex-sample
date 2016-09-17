import Vuex from 'vuex'
import Vue from 'vue'
import { CHANGE_KEYWORD, SEARCH } from './mutation-types'

function getGIFs (query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return window.fetch('http://api.giphy.com/v1/gifs/search?limit=10&q=' + params + '&api_key=dc6zaTOxFJmzC')
          .then(res => res.json())
}

const state = {
  keyword: '',
  gifs: []
}

const actions = {
  [CHANGE_KEYWORD] ({ commit }, keyword) {
    commit(CHANGE_KEYWORD, keyword)
  },
  [SEARCH] ({ commit, state }) {
    getGIFs(state.keyword)
      .then(data => {
        commit(SEARCH, data)
      })
  }
}

const getters = {
  gifs: state => state.gifs
}

const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [SEARCH] (state, gifs) {
    state.gifs = gifs.data
  }
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
