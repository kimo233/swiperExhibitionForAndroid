import request from '@/utils/request'

export function planGetAll() {
  return request({
    url: '/plan/getAll',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function planDelById(id) {
  return request({
    url: '/plan/delete',
    method: 'get',
    params: {
      'planid': id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
