import express from 'express'

import * as PositionController from '../controllers/PositionController'

const routes = express.Router()

routes.put('/to-initial', PositionController.toInitial)

routes.post('/move', PositionController.setPosition)

routes.get('/current-position', PositionController.currentPosition)

export default routes
