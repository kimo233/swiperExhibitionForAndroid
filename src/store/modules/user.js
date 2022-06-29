import { logout } from '@/api/user'
import { studentLogin,studentGetInfo } from '@/api/studentApi'
import { adminLogin,adminGetInfo } from '@/api/adminApi'
import { teacherLogin,teacherGetInfo } from '@/api/teacherApi'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import steps from '@/views/guide/steps'
const state = {
  token: '',
  avatar: '',
  roles: [],
  name: '',
  id: '',
  academy: '',
  major: '',
  grade: 0,
  sex: '',
  pictureURL: '',
  messageBox: '',
  type: 2,
  lec: [],
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_PIC: (state, pictureURL) => {
    state.pictureURL = pictureURL
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ACADEMY: (state, academy) => {
    state.academy = academy
  },
  SET_MAJOR: (state, major) => {
    state.major = major
  },
  SET_GRADE: (state, grade) => {
    state.grade = grade
  },
  SET_TYPE: (state, type) => {
    state.type = type
  },
  SET_LEC: (state, lec) => {
    state.lec = lec
  }
}

const actions = {

  setRole({ commit }, roles) {
    return new Promise(resolve => {
      commit('SET_ROLES', roles )
      resolve()
    })
  },
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    if(state.type == 2){
      return new Promise((resolve, reject) => {
        commit('SET_ID', username.trim())
        studentLogin(username.trim(), password).then(response => {
          commit('SET_TOKEN', response.rspData)
          setToken(response.rspData)
          resolve()
        }).catch(error => {
          reject(error)
        })
    })
    }else if(state.type ==0){
        return new Promise((resolve, reject) => {
            commit('SET_ID', username.trim())
            adminLogin(username.trim(), password).then(response => {
              commit('SET_TOKEN', response.rspData)
              setToken(response.rspData)
              resolve()
            }).catch(error => {
              reject(error)
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            commit('SET_ID', username.trim())
            teacherLogin(username.trim(), password).then(response => {
              commit('SET_TOKEN', response.rspData)
              setToken(response.rspData)
              resolve()
            }).catch(error => {
              reject(error)
            })
        })
    }
    
  },
  setType({commit},value){
    commit('SET_TYPE',value)
  },
  // get user info
  getInfo({ commit, state }) {
      if(state.type == 2){
        return new Promise((resolve, reject) => {
            studentGetInfo(state.id, state.token).then(response => {
      
              commit('SET_NAME', response.rspData.name)
              commit('SET_ACADEMY', response.rspData.academy)
              commit('SET_MAJOR', response.rspData.major)
              commit('SET_GRADE', response.rspData.grade)
              commit('SET_LEC', response.rspData.lectures)
              commit('SET_ID', response.rspData.id)
              console.log(state.lec)
              resolve()
              
            }).catch(error => {
              reject(error)
            })
          })
      }else if(state.type == 0){
        return new Promise((resolve, reject) => {
            adminGetInfo(state.id, state.token).then(response => {
      
              commit('SET_NAME', response.rspData.name)
              resolve()
              
            }).catch(error => {
              reject(error)
            })
          })
    }else{
        return new Promise((resolve, reject) => {
            teacherGetInfo(state.id, state.token).then(response => {
      
              commit('SET_NAME', response.rspData.name)
              commit('SET_LEC', response.rspData.lectures)
              commit('SET_ID', response.rspData.id)
              console.log(state.lec)
              resolve()
              
            }).catch(error => {
              reject(error)
            })
          })
    }
    
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

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
