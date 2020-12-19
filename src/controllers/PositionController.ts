import { Response, Request } from 'express'

import type { SetRobotMovementRequest, Actions } from '../utils/types'
import { invalidFinalPosition } from '../error/apiError'
import { currentDirection, movement, position, setDirection } from '../utils/robotControls'

export const toInitial = (req: Request, res: Response) => {
  position.x = 0
  position.y = 0
  setDirection(0)
  return res.status(200).send()
}

export const currentPosition = (req: Request, res: Response) => {
  return res.json({ position, face: currentDirection })
}

export const setPosition = (req: SetRobotMovementRequest, res: Response) => {
  const { move: commands } = req.body

  const finalPosition = commands.map((action: Actions) => movement[action]())

  if (finalPosition.includes(undefined)) return invalidFinalPosition(res)

  return res.json({ position })
}
