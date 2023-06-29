import express from 'express'
import path from 'path'

import users from './routes/users'
import sceneRoute from './routes/scenes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/scenes', sceneRoute)

server.use('/api/v1/users', users)

export default server
