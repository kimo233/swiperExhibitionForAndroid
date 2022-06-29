import request from '@/utils/request'

export function adminLogin(id,password) {
  return request({
    url: '/login/AdminLogin/'+id+'/'+password,
    method: 'get'
  })
}

export function adminGetInfo(id , token) {
  return request({
    url: '/admin/findAdmin/' + id,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}
export function adminListener() {
  return request({
    url: '/listener/total',
    method: 'get',
  })
}
//传入DTO格式
// {
//   "id": 0,
//   "messageBox": [
//     "string"
//   ],
//   "name": "string",
//   "passWord": "string",
//   "pictureURL": "string",
//   "sex": "string"
// }
export function AdminUpdate(DTO,token) {  
  return request({
    url: '/admin/updateAdmin/',
    method: 'put',
    headers:{
      "token" : token
    },
    
  
  })
}

