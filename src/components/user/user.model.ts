import { Document, Types } from 'mongoose'
import Joi from 'joi'

import { IHobby } from '../hobby/hobby.model'

export const UserValidationSchema = Joi.object().keys({
    _id: Joi.alternatives([Joi.object(), Joi.string()]),
    name: Joi.string().min(3).required(),
    hobbies: Joi.array().items(Joi.object())
})

export interface IUser extends Document {
    _id: Types.ObjectId
    name: string
    hobbies?: IHobby[]
}