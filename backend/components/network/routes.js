const product = require('../product/network.js')
const router = function (server) {
    server.use('/products',product)
}

module.exports = router