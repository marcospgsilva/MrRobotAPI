import express from 'express'

import * as PositionController from '../controllers/PositionController'
import { validateMoveFormatRequest, validateMoveCommands } from '../middlewares'

const routes = express.Router()

routes.post('/to-initial', PositionController.toInitial)

routes.post('/move', validateMoveFormatRequest, validateMoveCommands, PositionController.setPosition)

routes.get('/current-position', PositionController.currentPosition)

routes.get('/', (req, res) => res.send("Hi, I'm Mr.Robot"))

export default routes
