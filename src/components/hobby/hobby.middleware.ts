import { Types } from 'mongoose'
import { Request, Response, NextFunction } from 'express'

import Hobby from './hobby.repository'

export const checkHobby = async (req: Request, res: Response, next: NextFunction) => {
    const { hobbyId } = req.params

    if (!Types.ObjectId.isValid(hobbyId)) {
        return res.status(400).json({ message: 'Bad request', status: 400 })
    }

    const hobby = await Hobby.findById(hobbyId)

    if (!hobby) {
        return res.status(404).json({ message: 'Hobby not found', status: 404 })
    }

    req.hobby = hobby

    next()
}