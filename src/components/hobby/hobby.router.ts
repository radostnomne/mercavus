import { Router } from 'express'

import { validateBody } from '../../middleware/validation.middleware'
import { HobbyValidationSchema } from './hobby.model'
import { checkHobby } from './hobby.middleware'
import { createHobby, getHobby, getHobbies, updateHobby, deleteHobby } from './hobby.controller'

const router = Router()

/**
 *  @swagger
 *  /hobby:
 *  post:
 *      tags:
 *          - Hobby
 *      operationId: createHobby
 *      summary: Create a new hobby
 *      requestBody:
 *          description: Hobby data
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          passionLevel:
 *                              type: string
 *                              enum: [Low, Medium, High, Very-High]
 *                              required: true
 *                          year:
 *                              type: string
 *                          user:
 *                              type: string
 *                              required: true      
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Created hobby
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Hobby'
 *          '400':
 *              description: Bad request
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 */
router.post('/hobby', validateBody(HobbyValidationSchema), createHobby)

/**
 *  @swagger
 *  /hobby:
 *  get:
 *      tags:
 *          - Hobby
 *      operationId: getHobbies
 *      summary: Get all hobbies
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: A list of hobbies.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Hobby'
 */
router.get('/hobby', getHobbies)

/**
 *  @swagger
 *  /hobby/{hobbyId}:
 *  get:
 *      tags:
 *          - Hobby
 *      operationId: getHobby
 *      summary: Get single hobby
 *      parameters:
 *          - in: path
 *            name: hobbyId
 *            schema:
 *              type: string
 *            required: true
 *            description: Hobby ID
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: A single hobby
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Hobby'
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
router.get('/hobby/:hobbyId', checkHobby, getHobby)

/**
 *  @swagger
 *  /hobby/{hobbyId}:
 *  put:
 *      tags:
 *          - Hobby
 *      operationId: updateHobby
 *      summary: Update hobby
 *      parameters:
 *          - in: path
 *            name: hobbyId
 *            schema:
 *              type: string
 *            required: true
 *            description: Hobby ID
 *      requestBody:
 *          description: Hobby data
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          passionLevel:
 *                              type: string
 *                              enum: [Low, Medium, High, Very-High]
 *                              required: true
 *                          year:
 *                              type: string
 *                          user:
 *                              type: string
 *                              required: true 
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Updated hobby
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Hobby'
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
router.put('/hobby/:hobbyId', checkHobby, updateHobby)

/**
 *  @swagger
 *  /hobby/{hobbyId}:
 *  delete:
 *      tags:
 *          - Hobby
 *      operationId: deleteHobby
 *      summary: Delete hobby
 *      parameters:
 *          - in: path
 *            name: hobbyId
 *            schema:
 *              type: string
 *            required: true
 *            description: Hobby ID
 *      produces:
 *          - application/json
 *      responses:
 *          '200':
 *              description: Deleted hobby
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Hobby'
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
router.delete('/hobby/:hobbyId', checkHobby, deleteHobby)

export const hobbyRoutes = router

/**
 * @swagger
 * components:
 *  schemas:
 *      Hobby:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              name:
 *                  type: string
 *                  required: true
 *              passionLevel:
 *                  type: string
 *                  enum: [Low, Medium, High, Very-High]
 *                  required: true
 *              year:
 *                  type: string
 *              user:
 *                  type: string
 *                  required: true
 *              createdAt:
 *                  type: string
 *              updatedAt:
 *                  type: string
 */
