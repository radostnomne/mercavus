import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'MERCAVUS API',
            version: '1.0.0',
            description: 'Documentation for MERCAVUS'
        }
    },
    apis: [path.join(__dirname, '../../**/*.router.js')]
})
