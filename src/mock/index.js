const Mock = require('mockjs')

Mock.mock('/api/treeSelect', 'get', require('./data/treeSelect.json'))
