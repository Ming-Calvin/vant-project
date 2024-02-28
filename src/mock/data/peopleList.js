const Mock = require('mockjs')

;(() => {
    const data = {}
    for (let i = 0; i <= 10; i++ ) {
        const key = 100 + i
        data[key] = []
        for (let j = 1; j < 6 * Math.random(); j++) {
            data[key].push({
                name: Mock.Random.cname(),
                value:(i + 1) * 1000 + j
            })
        }
    }

    module.exports = data
})()