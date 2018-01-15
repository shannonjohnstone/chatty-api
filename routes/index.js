import baseExampleRoute from './base-example'

const routes = (app) => {
  const baseUrl = '/api'
  baseExampleRoute(app, baseUrl)
}

export default routes
