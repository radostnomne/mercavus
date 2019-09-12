import { Request, Response, NextFunction } from 'express'

type expressHandler = (req: Request, res: Response, next: NextFunction) => Promise<ServerResponse>

type ServerResponse = {
    status: number
    data?: any
    error?: string
}

export class ServerError extends Error {
    public status: number

    constructor(message: string, status: number) {
        super(message)
        this.status = status
    }
}

export const successResponse = (data: any, status: number = 200) => ({ data, status })
export const errorResponse = (message: string, status: number) => { throw new ServerError(message, status) }

export const requestHandler = (fn: expressHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await fn(req, res, next)

            if (result) {
                const { status, data } = result
                return res.status(status).json({ data, status })
            }
        } catch (err) {
            req.log.error(err)

            const { message, status = 500 } = err
            return res.status(status).json({ message, status })
        }
    }
}