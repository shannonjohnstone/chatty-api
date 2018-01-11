require('./config')

import path from 'path'
import http from 'http'
import express from 'express'
import socketIO from 'socket.io'
import routes from './routes'
import socketConfiguration from './socketio'

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

// app.use(express.static(publicPath))
// routes(app)

socketConfiguration(io)

// Serve static
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));
}

server.listen(PORT, () => {
  if (NODE_ENV !== 'production') {
    console.log('Test server update babel...')
    console.log(`Server running on http://localhost:${PORT}`)
  }
})
