import request from '@/utils/request'

// {
//     "answersheets": [
//       {
//         "id": 0,
//         "sheet": {
//           "additionalProp1": {
//             "x": "string",
//             "y": 0
//           },
//           "additionalProp2": {
//             "x": "string",
//             "y": 0
//           },
//           "additionalProp3": {
//             "x": "string",
//             "y": 0
//           }
//         },
//         "studentID": 0,
//         "testID": 0
//       }
//     ],
//     "batch": 0,
//     "id": 0,
//     "invigilatorlD": 0,
//     "lecturelD": 0,
//     "questionsID": [
//       0
//     ],
//     "session": 0,
//     "studentsID": [
//       0
//     ],
//     "teacherID": 0,
//     "timeBegin": "2022-05-30T05:41:11.965Z",
//     "timeFinish": "2022-05-30T05:41:11.965Z"
//   }
export function testUpload(DTO,token) {
  return request({
    url: '/test/addTest/',
    method: 'post',
    data:JSON.stringify(DTO),
    headers:{
        "token" : token,
        'Content-Type': 'application/json;charset=UTF-8',
      }
  })
}
export function testUploadAuto(DTO,token) {
    return request({
      url: '/test/addTestAutomatic/',
      method: 'post',
      headers:{
          "token" : token
        }
    })
  }

  export function TestDeleteById(id,token) {
    return request({
      url: '/test/deleteTest/'+id,
      method: 'delete',
      headers:{
        "token" : token
      }
    })
  }

  export function testGetInfo(id , token) {
    return request({
      url: '/test/findTest/' + id,
      method: 'get',
      headers:{
        "token" : token
      }
    })
  }
  
export function GetAllTestInfo(token) {
    return request({
      url: '/test/findAllTest/' ,
      method: 'get',
      headers:{
        "token" : token
      }
    })
  }

  export function TestInfoUpdate(DTO,token) {
    return request({
      url: '/test/updateTest/',
      method: 'put',
      headers:{
        "token" : token
      }
    })
  }