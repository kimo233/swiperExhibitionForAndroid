import request from '@/utils/request'

export function AnswersheetUpload(token) {
    return request({
      url: '/answersheet/addAnswerSheet/',
      method: 'post',
      headers:{
        "token" : token
      }
    })
}
//传入格式
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
export function AnswersheetUpdate(DTO,token) {
    return request({
      url: '/answersheet/updateAnswerSheet/',
      method: 'put',
      headers:{
        "token" : token
      }
    })
}

export function AnswersheetDeleteById(id,token) {
    return request({
      url: '/answersheet/deleteAnswerSheet/'+id,
      method: 'delete',
      headers:{
        "token" : token
      }
    })
}
export function AnswersheetFindById(id,token) {
    return request({
      url: '/answersheet/findAnswerSheet/'+id,
      method: 'get',
      headers:{
        "token" : token
      }
    })
}