import request from '@/utils/request'
 // {
    //     "academy": "string",
    //     "id": 0,
    //     "normalscore": 0,
    //     "students": [
    //       0
    //     ],
    //     "teacherID": 0,
    //     "testscore": [
    //       0
    //     ]
    //   }
export function lectureUpload(DTO,token) {
    return request({
      url: '/lecture/addTest/',
      method: 'post',
      headers:{
          "token" : token
        }
    })
  }
    export function LectureDeleteById(id,token) {
      return request({
        url: '/lecture/deleteLecture/'+id,
        method: 'delete',
        headers:{
          "token" : token
        }
      })
    }
  
    export function lectureGetInfo(id , token) {
      return request({
        url: '/lecture/findLecture/' + id,
        method: 'get',
        headers:{
          "token" : token
        }
      })
    }
    
  export function GetAllLectureInfo(token) {
      return request({
        url: '/lecture/findAllLecture/' ,
        method: 'get',
        headers:{
          "token" : token
        }
      })
    }
  
   
    export function lectureInfoUpdate(DTO,token) {
      return request({
        url: '/lecture/updateLecture/',
        method: 'put',
        headers:{
          "token" : token
        }
      })
    }