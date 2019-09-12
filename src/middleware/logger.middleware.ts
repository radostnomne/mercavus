import { Request, Response, NextFunction } from 'express'
import pino from 'pino'
import uuid from 'uuid/v1'

const logger = pino()

export const attachLogger = (req: Request, res: Response, next: NextFunction) => {
    const correlationId = req.headers['x-correlation-id'] || uuid()
    req.log = logger.child({
        correlationId,
        user: req.ip
    })

    res.setHeader('x-correlation-id', correlationId)

    next()
}

export const logRoute = (request: Request, response: Response, next: NextFunction) => {
    const method = request.method
    logger.info(`[ ${new Date().toISOString()} ] ${request.protocol} : ${method.padStart(7)} | ${request.url}`)
  
    next()
}