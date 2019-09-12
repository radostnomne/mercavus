import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { attachLogger, logRoute } from './middleware/logger.middleware'
import { swaggerRoutes } from './components/swagger'
import { userRoutes } from './components/user'
import { hobbyRoutes } from './components/hobby'

dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const app = express()

app.use(bodyParser.json())
app.use(logRoute)
app.use(attachLogger)

app.use(swaggerRoutes)

app.use(userRoutes)
app.use(hobbyRoutes)

export default app
