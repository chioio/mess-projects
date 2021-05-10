import { createStore } from 'vuex'

export default createStore({
  state: {
    isSigned: false,
    isLeftAsideShow: false,
    isRightAsideShow: false,
    selectedPet: null,
    comments: [],
    token: sessionStorage.getItem('token'),
    user: JSON.parse(sessionStorage.getItem('user')),
    pets: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      sessionStorage.setItem('token', token)
    },
    SET_USER: (state, user) => {
      state.user = user
      sessionStorage.setItem('user', JSON.stringify(user))
    },
    REMOVE_INFO: (state) => {
      state.token = ''
      state.user = {}
      sessionStorage.setItem('token', '')
      sessionStorage.setItem('user', JSON.stringify(null))
    },
    SET_PETS: (state, pets) => {
      state.pets = pets
    }
  },
  actions: {
    signIn(context, payload) {
      this.state.isSigned = true
      context.commit('SET_TOKEN', payload.token)
      context.commit('SET_USER', payload.user)
    },
    signOut(context) {
      this.state.isSigned = false
      context.commit('REMOVE_INFO')
    },
    setPetsState(context, pets) {
      context.commit('SET_PETS', pets)
    }
  },
  modules: {}
})
