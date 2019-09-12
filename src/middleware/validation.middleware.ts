import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const validateBody = (validationSchema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = Joi.validate(req.body, validationSchema)

        if (!error) return next()

        const errorDetails = error.details
            .map(detail => detail.message)
            .join('\n')

        req.log.error(errorDetails)
        
        return res.status(400).json({ message: 'Bad request', status: 400 })
    }
}