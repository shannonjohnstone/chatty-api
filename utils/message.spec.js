import { generateMessage } from './message'

describe('message', () => {
  it('should return the correct message object', () => {
    const expected = { "createAt": new Date(), "from": "admin", "text": "This is a message" }
    expect(generateMessage('admin', 'This is a message')).toEqual(expected)
  })
})
