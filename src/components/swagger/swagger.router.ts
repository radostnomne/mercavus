import { Router } from 'express'
import swaggerUI from 'swagger-ui-express'

import { swaggerSpec } from './swagger.service'

const router = Router()

router.use('/docs', swaggerUI.serve)
router.get('/docs', swaggerUI.setup(swaggerSpec))

export const swaggerRoutes = router