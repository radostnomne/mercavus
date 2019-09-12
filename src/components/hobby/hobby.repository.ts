import mongoose from 'mongoose'

import { IHobby } from './hobby.model'

const HobbySchema: mongoose.Schema = new mongoose.Schema({
    passionLevel: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: String },
    user: { type: mongoose.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

export default mongoose.model<IHobby>('Hobby', HobbySchema)