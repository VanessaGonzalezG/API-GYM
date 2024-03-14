const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()
const routes = require('./routes/index')
const connectToDB = require('./db')

const initServer = async () => {
    await connectToDB()
    app.use(express.json())
    app.use('/api', routes)
    
    app.listen(process.env.PORT, () => {
        console.log(`Server works!, http://localhost:${process.env.PORT}`)
    })
}
initServer()