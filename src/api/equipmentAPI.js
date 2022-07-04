import request from '@/utils/request'

export function equipmentGetAll() {
  return request({
    url: '/equipment/getAll',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function equipmentDelById(id) {
  return request({
    url: '/equipment/delete',
    method: 'get',
    params: {
      'equipmentid': id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
