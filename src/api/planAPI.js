import request from '@/utils/request'

export function planGetAll() {
  return request({
    url: '/plan/getAll',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function planDelById(id) {
  return request({
    url: '/plan/delete',
    method: 'get',
    params: {
      'planid': id
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function planAdd(planname, stratrgy, plandata, plantime, plansync, plancontent, planauth) {
  return request({
    url: '/plan/add',
    method: 'get',
    params: {
      'planname': planname,
      'stratrgy': stratrgy,
      'plandata': plandata,
      'plantime': plantime,
      'plansync': plansync,
      'plancontent': plancontent,
      'planauth': planauth,
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
