const mongoose = require('mongoose')
require('dotenv').config()

async function connectToDB() {
    await mongoose.connect(process.env.DB_URL).then(
        console.log('Connection Successful')
    )
}

module.exports = connectToDB