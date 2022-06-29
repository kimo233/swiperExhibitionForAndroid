import request from '@/utils/request'

export function ClassGetInfo(id , token) {
  return request({
    url: '/lecture/findLecture/' + id,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}

export function GetAllClassInfo(token) {
  return request({
    url: '/lecture/findAllLecture/' ,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}
//DTO数据类型
// {
//   "academy": "string",
//   "grade": 0,
//   "id": 0,
//   "major": "string",
//   "messageBox": [
//     "string"
//   ],
//   "name": "string",
//   "passWord": "string",
//   "pictureURL": "string",
//   "sex": "string"
// }
export function ClassInfoUpdate(DTO,token) {
  return request({
    url: '/lecture/updateLecture/' ,
    method: 'put',
    data: JSON.stringify(DTO),
    headers:{
      "token" : token,
      'Content-Type': 'application/json',
    }
  })
}


export function ClassAdd(DTO,token) {
  return request({
    url: '/lecture/addLecture',
    method: 'post',
    data: JSON.stringify(DTO),
    headers:{
      "token" : token,
      'Content-Type': 'application/json',
    }
  })
}
export function ClassDeleteById(id,token) {
  return request({
    url: '/lecture/deleteLecture/'+id,
    method: 'delete',
    headers:{
      "token" : token
    }
  })
}