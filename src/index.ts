import http from 'http'
import pino from 'pino'

import app from './server'

const logger = pino()

const port = process.env.PORT

http.createServer(app).listen(port, () => {
    logger.info(`Server listening on ${port} port!!!`)
})