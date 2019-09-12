import { requestHandler, successResponse, errorResponse } from '../../helper/request.helper'
import User from './user.repository'

export const createUser = requestHandler(async (req) => {
    const user = new User(req.body)

    const insertedUser = await user.save()

    return successResponse(insertedUser)
})

export const getUser = requestHandler(async (req) => {
    const user = await User.findById(req.user._id).populate('hobbies').lean()
    return successResponse(user)
})

export const updateUser = requestHandler(async (req) => {
    const user = await User.findByIdAndUpdate(req.user._id, { $set: req.body }, { new: true })

    return successResponse(user)
})

export const deleteUser = requestHandler(async (req) => {
    const { userId } = req.params

    const user = await User.findByIdAndDelete(userId)

    return successResponse(user)
})

export const getUsers = requestHandler(async (req) => {
    const users = await User.find({}).populate('hobbies').lean()

    return successResponse(users)
})
