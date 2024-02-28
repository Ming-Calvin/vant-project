const Mock = require('mockjs')

// 树形部门
Mock.mock('/api/treeSelect', 'get', require('./data/treeSelect.json'))

// 人员列表
Mock.mock('/api/peopleList', 'get', require('./data/peopleList.json'))
