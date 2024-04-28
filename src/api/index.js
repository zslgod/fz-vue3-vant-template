import request from '@/utils/request'

export function hasOrder(params) {
    return request.post('/hasOrder', params)
}
export function getOrderList(params) {
    return request.get('/orderList', {params})
}