import express from 'express'
import path from 'path'

import users from './routes/users'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)

export default server
