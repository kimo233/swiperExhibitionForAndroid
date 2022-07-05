
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getInfo } from '@/api/userAPI'
import router, { resetRouter } from '@/router'
const state = {
  token: 'no',
  roles: '',
  userid: 0,
  username: '',
  password: '',
  userorgan: '',
  userchar: '',
  usersituation: 0,
  userrealname: '',
  useremail: '',
  userphone: '',
  isadmin: 0
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_NAME: (state, name) => {
    state.username = name
  },
  SET_PASS: (state, pass) => {
    state.password = pass
  },
  SET_ORGAN: (state, organ) => {
    state.userorgan = organ
  },
  SET_CHAR: (state, char) => {
    state.userchar = char
  },
  SET_SIT: (state, situation) => {
    state.usersituation = situation
  },
  SET_REAL: (state, real) => {
    state.userrealname = real
  },
  SET_EMAIL: (state, email) => {
    state.useremail = email
  },
  SET_PHO: (state, phone) => {
    state.userphone = phone
  },
  SET_IS: (state, isad) => {
    state.isadmin = isad
  }
}

const actions = {

  setRole({ commit }, roles) {
    return new Promise(resolve => {
      commit('SET_ROLES', roles)
      resolve()
    })
  },
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login(username.trim(), password).then(response => {
        commit('SET_TOKEN', 'yes')
        commit('SET_NAME', response.data[3])
        console.log(response.data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  setType({ commit }, value) {
    commit('SET_TYPE', value)
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(1).then(response => {
        // console.log(response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
