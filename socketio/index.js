import * as constants from '../constants'
import { generateMessage, generateLocationMessage } from '../utils/message'

export default function (io) {
  io.on('connection', (socket) => {
    // new welcome message, goes to person connecting
    socket.emit(constants.NEW_MESSAGE, generateMessage(constants.ADMIN, constants.ADMIN_WELCOME_MESSAGE))

    // user has entered, goes to all users but the user entering
    socket.broadcast.emit(constants.NEW_MESSAGE, generateMessage(constants.ADMIN, constants.NEW_USER_ENTERED_MESSAGE))

    // location message, goes to all users
    socket.on(constants.CREATE_LOCATION_MESSAGE, (data) => {
      io.emit(constants.NEW_LOCATION_MESSAGE, generateLocationMessage(data))
    })

    // general message, goes to all users
    socket.on(constants.CREATE_MESSAGE, (data, cb) => {
      io.emit(constants.NEW_MESSAGE, generateMessage(data.from, data.text))
      cb('This is from the server')
    })
  })
}
