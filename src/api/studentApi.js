import request from '@/utils/request'

export function studentLogin(id,password) {
  return request({
    url: '/login/StudentLogin/'+id+'/'+password,
    method: 'get'
  })
}

export function studentGetInfo(id , token) {
  return request({
    url: '/student/findStudent/' + id,
    method: 'get',
    headers:{
      "token" : token
    }
  })
}
export function StudentPasswordModify(id,oldpassword,newpassword,token) {
  return request({
    url: '/login/StudentPassModify'+id+'/'+oldpassword +'/'+newpassword,
    method: 'put',
    headers:{
      "token" : token
    }
  })
}

export function GetAllStudentsInfo(token) {
  return request({
    url: '/student/findAllStudents/' ,
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
export function StudentsInfoUpdate(DTO,token) {
  return request({
    url: '/student/updateStudent/' ,
    method: 'put',
    data: JSON.stringify(DTO),
    headers:{
      "token" : token,
      'Content-Type': 'application/json',
    }
  })
}


export function StudentAdd(DTO,token) {
  return request({
    url: '/student/addStudent',
    method: 'post',
    data: JSON.stringify(DTO),
    headers:{
      "token" : token,
      'Content-Type': 'application/json',
    }
  })
}
export function StudentDeleteById(id,token) {
  return request({
    url: '/student/deleteStudent/'+id,
    method: 'delete',
    headers:{
      "token" : token
    }
  })
}