import axios from 'axios'

export const state = () => ({
  isAuthenticated: false,
  user: null
})

export const getters = {
  // isAuthenticated: () => vueAuth.isAuthenticated()
  user: state => state.user
}

export const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.user) {
      commit('SET_USER', req.session.user)
    }
  },
  async login ({ commit }, { identifier, password }) {
    try {
      const { data } = await axios.post('/api/login', { identifier, password })
      commit('SET_USER', data.user)
      this.app.router.push('/dashboard')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }
}

// export const mutations = {
//   isAuthenticated (state, payload) {
//     state.isAuthenticated = payload.isAuthenticated
//   }
// }

// export const actions = {
//   login (context, payload) {
//     vueAuth.login(payload.user, payload.requestOptions).then((response) => {
//       context.commit('isAuthenticated', {
//         isAuthenticated: vueAuth.isAuthenticated()
//       })
//     })
//   }
// }

// export const strict = false
