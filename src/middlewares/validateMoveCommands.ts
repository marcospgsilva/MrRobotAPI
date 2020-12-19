import { Response } from 'express'

import { invalidCommands } from '../error/apiError'
import { SetRobotMovementRequest } from '../utils/types'
import validateCommands from '../utils/validateCommands'

const validateMoveCommands = (req: SetRobotMovementRequest, res: Response, next) => {
  if (!validateCommands(req.body.move)) return invalidCommands(res)
  next()
}

export default validateMoveCommands
