import Hobby from './hobby.repository'
import { requestHandler, successResponse } from '../../helper/request.helper'

export const createHobby = requestHandler(async (req) => {
    const hobby = new Hobby(req.body)

    const insertedHobby = await hobby.save()

    return successResponse(insertedHobby)
})

export const getHobby = requestHandler(async (req) => {
    const hobby = await Hobby.findById(req.hobby._id).populate('user')
    return successResponse(hobby)
})

export const updateHobby = requestHandler(async (req) => {
    const hobby = await Hobby.findByIdAndUpdate(req.hobby._id, { $set: req.body }, { new: true })

    return successResponse(hobby)
})

export const deleteHobby = requestHandler(async (req) => {
    const hobby = await req.hobby.remove()

    return successResponse(hobby)
})

export const getHobbies = requestHandler(async (req) => {
    const hobbies = await Hobby.find({}).populate('user')

    return successResponse(hobbies)
})