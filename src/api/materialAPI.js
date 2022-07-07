import request from '@/utils/request'

export function materialGetAll() {
  return request({
    url: '/material/getAll',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function materialAdd(materialname, base64, userid) {
  return request({
    url: '/material/add',
    method: 'post',
    params: {
      'materialname': materialname,
      'base64': base64,
      'userid': userid
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Header': "access-control-allow-origin, authority, content-type, version-info, X-Requested-With",
      'Content-Type': 'application/json'
    }
  })
}

