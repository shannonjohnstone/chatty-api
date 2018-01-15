import * as constants from '../constants'
const env = process.env.NODE_ENV || constants.DEVELOPMENT

if (env === constants.DEVELOPMENT) {
  const envConfig = require('./config.json')[env]
  Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])
}
