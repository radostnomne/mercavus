import { Router } from 'express'

import { UserValidationSchema } from './user.model'
import { validateBody } from '../../middleware/validation.middleware'
import { checkUser } from './user.middleware'
import { createUser, getUser, getUsers, updateUser, deleteUser } from './user.controller'

const router = Router()

/**
 *  @swagger
 *  /user:
 *  post:
 *      tags:
 *          - User
 *      operationId: createUser
 *      summary: Create a new user
 *      requestBody:
 *          description: User data
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Created user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          '400':
 *              description: Bad request
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 */
router.post('/user', validateBody(UserValidationSchema), createUser)

/**
 *  @swagger
 *  /user:
 *  get:
 *      tags:
 *          - User
 *      operationId: getUsers
 *      summary: Get all users
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: A list of users.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 */
router.get('/user', getUsers)

/**
 *  @swagger
 *  /user/{userId}:
 *  get:
 *      tags:
 *          - User
 *      operationId: getUser
 *      summary: Get single user
 *      parameters:
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            required: true
 *            description: User ID
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: A single user
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          '400':
 *              description: Bad request
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 *          '404':
 *              description: Not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 */
router.get('/user/:userId', checkUser, getUser)

/**
 *  @swagger
 *  /user/{userId}:
 *  put:
 *      tags:
 *          - User
 *      operationId: updateUser
 *      summary: Update user
 *      parameters:
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            required: true
 *            description: User ID
 *      requestBody:
 *          description: User data
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Updated user
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          '400':
 *              description: Bad request
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 *          '404':
 *              description: Not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 */
router.put('/user/:userId', checkUser, updateUser)

/**
 *  @swagger
 *  /user/{userId}:
 *  delete:
 *      tags:
 *          - User
 *      operationId: deleteUser
 *      summary: Delete user
 *      parameters:
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            required: true
 *            description: User ID
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Deleted user
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          '400':
 *              description: Bad request
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 *          '404':
 *              description: Not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 */
router.delete('/user/:userId', checkUser, deleteUser)

export const userRoutes = router

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              name:
 *                  type: string
 *                  required: true
 *              createdAt:
 *                  type: string
 *              updatedAt:
 *                  type: string
 *      Error:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *              message:
 *                  type: string
 */