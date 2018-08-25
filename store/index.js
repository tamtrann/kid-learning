import axios from 'axios'

export const state = () => ({
  user: null
})

export const getters = {
  user: state => state.user
}

export const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.user) {
      commit('SET_USER', req.session.user)
    }
  },

  async LOGIN ({ commit }, { identifier, password }) {
    try {
      const { data } = await axios.post('/api/login', { identifier, password })
      commit('SET_USER', data.user)
      commit('note/SET_NOTES', data.user.notes)
      this.app.router.push('/dashboard')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async LOGOUT ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
    this.app.router.push('/')
  },

  async ADD_ANSWER ({ commit }, { answer, id }) {
    try {
      const { data } = await axios.post('/api/answer', { answer, id })
      console.log(data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async ADD_QUESTION ({ commit }, { question, lessonId }) {
    console.log(question, lessonId)
    try {
      const { data } = await axios.post('/api/question', { question, lessonId })
      console.log(data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}

export const strict = false
