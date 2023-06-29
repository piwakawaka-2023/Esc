import express from 'express'
import path from 'path'

import sceneRoute from './routes/scenes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/scenes', sceneRoute)

export default server
