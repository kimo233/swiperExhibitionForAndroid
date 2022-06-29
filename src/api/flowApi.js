import request from '@/utils/request'

export function lectureAddStudent(lectureID ,studentID, token) {
    return request({
        url: '/flow/lectureAddStudent/' + lectureID+'/'+studentID,
        method: 'post',
        headers:{
            "token" : token,
            'Content-Type': 'application/json',
        }
    })
}

export function teacherHoldLecture(lectureID ,teacherID, token) {
    return request({
        url: '/flow/teacherHoldLecture/' + teacherID+"/"+lectureID,
        method: 'post',
        headers:{
            "token" : token,
            'Content-Type': 'application/json',
        }
    })
}