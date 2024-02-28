import request from '@/request'

export function getTreeSelect() {
  return request({
    url: "/api/treeSelect",
    method: "get"
  })
}

export function peopleList() {
  return request({
    url: "/api/peopleList",
    method: "get"
  })
}
