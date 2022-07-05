import request from '@/utils/request'

export function programGetAll() {
  return request({
    url: '/program/getAll',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function programAdd(pprogramname, programresolvingratio, programcontent) {
  return request({
    url: '/program/add',
    method: 'get',
    params: {
      'programname': pprogramname,
      'programresolvingratio': programresolvingratio,
      'programcontent': programcontent
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function programDelById(id) {
  return request({
    url: '/program/delete',
    method: 'get',
    params: {
      'programid': id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
