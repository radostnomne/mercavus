import { Types } from 'mongoose'
import { Request, Response, NextFunction } from 'express'

import User from './user.repository'

export const checkUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params

    if (!Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Bad request', status: 400 })
    }

    const user = await User.findById(userId)

    if (!user) {
        return res.status(404).json({ message: 'User not found', status: 404 })
    }

    req.user = user

    next()
}