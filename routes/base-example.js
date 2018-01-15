import express from 'express'

const route = (app, baseUrl) => {
  const router = express.Router()
  router.get('/', (req, res) => res.json({ apiService: 'chat' }))
  app.use(baseUrl, router)
}

export default route
