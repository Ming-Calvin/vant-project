import request from '@/request'

export function getTreeSelect() {
  return request({
    url: "/api/treeSelect",
    method: "get"
  })
}
