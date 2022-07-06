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

export function equipAdd(equipmentname, macaddress, currentplan, online, equipmentorgan, equipmentresolvingratio, equipmentgroup, materialname) {
  return request({
    url: '/equipment/add',
    method: 'get',
    params: {
      'equipmentname': equipmentname,
      'macaddress': macaddress,
      'currentplan': currentplan,
      'online': online,
      'equipmentorgan': equipmentorgan,
      'equipmentresolvingratio': equipmentresolvingratio,
      'equipmentgroup': equipmentgroup,
      'materialname': materialname
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
