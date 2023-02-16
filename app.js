const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const mongoose = require("mongoose");
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()

const PORT =  process.env.PORT || 5000

app.use(express.static('./public'))
app.use(express.json())
// app.use(notFound)
// app.use(errorHandlerMiddleware)

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_KEY)
        app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`))
    } catch (error) {
        console.log('SERVER ERROR: ', error)
    }
}

start()
