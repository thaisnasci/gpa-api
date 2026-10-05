import express from 'express'
const app = express()

import mongoose from './config/db-connection.js'
import cors from 'cors'

import animalRoutes from './routes/animalRoutes.js'
import adotanteRoutes from './routes/adotanteRoutes.js'
import adocaoRoutes from './routes/adocaoRoutes.js'

import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerOptions from './config/swagger-config.js'

const swaggerSpec = swaggerJsdoc(swaggerOptions)

// Configurações do Express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Rotas
app.use('/', animalRoutes)
app.use('/', adotanteRoutes)
app.use('/', adocaoRoutes)

// Teste da API
app.get('/', (req, res) => {
    res.send('API GPA funcionando!')
})

// Rodando a API
const port = process.env.PORT || 3000

app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }

    console.log(`API rodando em http://localhost:${port}.`)
})