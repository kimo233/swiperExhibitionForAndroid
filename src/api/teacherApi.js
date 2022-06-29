import request from '@/utils/request'

export function teacherLogin(id,password) {
  return request({
    url: '/login/TeacherLogin/'+id+'/'+password,
    method: 'get'
  })
}

export function teacherGetInfo(id , token) {
  return request({
    url: '/teacher/findTeacher/' + id,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}

export function TeacherPasswordModify(id,oldpassword,newpassword,token) {
  return request({
    url: '/login/TeacherPassModify'+id+'/'+oldpassword +'/'+newpassword,
    method: 'put',
    headers:{
      "token" : token
    }
  })
}
export function GetALLteachersInfo(token) {
  return request({
    url: '/teacher/findAllTeacher/' ,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}
//DTO数据类型
// {
//   "academy": "string",
//   "id": 0,
//   "messageBox": [
//     "string"
//   ],
//   "name": "string",
//   "passWord": "string",
//   "pictureURL": "string",
//   "sex": "string"
// }
export function TeacherAdd(DTO,token) {
  return request({
    url: '/teacher/addTeacher',
    method: 'post',
    data: JSON.stringify(DTO),
    headers:{
      "token" : token,
      'Content-Type': 'application/json',
    }
  })
}
export function TeacherDeleteById(id,token) {
  return request({
    url: '/teacher/deleteTeacher/'+id,
    method: 'delete',
    headers:{
      "token" : token

    }
  })
}
export function TeacherInfoUpdate(DTO,token) {
  return request({
    url: '/teacher/updateTeacher/',
    method: 'put',
    data: JSON.stringify(DTO),
    headers:{
      "token" : token,
      'Content-Type': 'application/json',
    }
  })
}
