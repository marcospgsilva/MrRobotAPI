import express from 'express'

import * as PositionController from '../controllers/PositionController'

const routes = express.Router()

routes.post('/to-initial', PositionController.toInitial)

routes.post('/move', PositionController.setPosition)

routes.get('/current-position', PositionController.currentPosition)

routes.get('/', (req, res) => {
  return res.send("Hi, I'm Mr.Robot")
})

export default routes
