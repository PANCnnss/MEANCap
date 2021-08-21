require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    mongoDbUrl: process.env.MONGO_DB_URL
}

module.exports = { config }