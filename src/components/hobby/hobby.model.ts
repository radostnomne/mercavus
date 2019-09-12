import { Types, Document } from 'mongoose'
import Joi from 'joi'

import { IUser } from '../user'

export enum PassionLevel {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    VERY_HIGH = 'Very-High'
}

export const HobbyValidationSchema = Joi.object().keys({
    _id: Joi.alternatives([Joi.object(), Joi.string()]),
    passionLevel: Joi.string().allow(Object.values(PassionLevel)).required(),
    name: Joi.string().min(3).required(),
    year: Joi.string().alphanum().default(''),
    user: Joi.alternatives([Joi.string(), Joi.object()]).required()
})

export interface IHobby extends Document {
    _id: Types.ObjectId
    passionLevel: string
    name: string
    year: string
    user?: IUser
}