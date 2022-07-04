import request from '@/utils/request'

export function login(name, pass) {
  return request({
    url: '/user/login',
    method: 'get',
    params: {
      'username': name,
      'password': pass
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getInfo(id) {
  return request({
    url: '/user/select',
    method: 'get',
    params: {
      'userid': id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function userGetAll() {
  return request({
    url: '/user/getAll',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function userDelById(id) {
  return request({
    url: '/user/delete',
    method: 'get',
    params: {
      'equipmentid': id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
