import schema from '../utils/moveRequestSchema'
import { invalidFormatRequest } from '../error/apiError'
import { SetRobotMovementRequest } from '../utils/types'

const validateMoveFormatRequest = (req: SetRobotMovementRequest, res, next) => {
  const requestBody = req.body
  schema.isValid(requestBody)
    .then((valid) => {
      if (!valid) return invalidFormatRequest(res)
      next()
    })
}

export default validateMoveFormatRequest
