import mongoose from 'mongoose'

import { IUser } from './user.model'

const UserSchema: mongoose.Schema = new mongoose.Schema({
    name: { type: String, required: true }
}, { timestamps: true })

UserSchema.virtual('hobbies', {
    ref: 'Hobby',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

export default mongoose.model<IUser>('User', UserSchema)