import request from '@/utils/request'

export function questionAdd(DTO,token) {
  return request({
    url: '/question/addQuestion/',
    method: 'post',
    data: JSON.stringify(DTO),
    headers:{
        "token" : token,
        'Content-Type': 'application/json',
      }
  })
}
// {
//     "audioURL": "string",
//     "correctAnswer": "string",
//     "description": "string",
//     "id": 0,
//     "pictureURL": "string",
//     "score": 0,
//     "subject": "string",
//     "type": "string"
//   }
export function questionUpload(DTO,token) {
    return request({
      url: '/question/addQuestion/',
      method: 'post',
      headers:{
          "token" : token
        }
    })
  }
    export function QuestionDeleteById(id,token) {
      return request({
        url: '/question/deleteQuestion/'+id,
        method: 'delete',
        headers:{
          "token" : token
        }
      })
    }
  
    export function questionGetInfo(id , token) {
      return request({
        url: '/question/findQuestion/' + id,
        method: 'get',
        headers:{
          "token" : token
        }
      })
    }
    
  export function GetAllQuestionInfo(token) {
      return request({
        url: '/question/findAllQuestion/' ,
        method: 'get',
        headers:{
          "token" : token
        }
      })
    }
  
   
    export function QusetionInfoUpdate(DTO,token) {
      return request({
        url: '/qusetion/updateQusetion/',
        method: 'put',
        headers:{
          "token" : token
        }
      })
    }