import request from '@/utils/request'

export function materialGetAll() {
  return request({
    url: '/material/getAll',
    method: 'get',
    headers:{
        'Content-Type': 'application/json',
      }
  })
}

export function materialAdd(material) {
    return request({
      url: '/material/add',
      method: 'get',
      params: JSON.parse(material),
      headers:{
          'Content-Type': 'application/json',
        }
    })
  }

