import { Response, Request } from 'express'

import { SetRobotMovementRequest, Actions } from '../utils/types'

const position = {
  x: 0,
  y: 0
}

let direction = 0

const directions = ['D', 'B', 'E', 'C']

let currentDirection = directions[direction]

const defaultMovements: Actions[] = [
  'D',
  'E',
  'C',
  'B',
  'M',
  'GE',
  'GD'
]

const updateDirection = (action: Actions) => {
  switch (action) {
    case 'GD':
      (direction === directions.length - 1) ? currentDirection = directions[direction = 0] : currentDirection = directions[direction += 1]
      return currentDirection
    case 'GE':
      (direction === 0) ? currentDirection = directions[direction = directions.length - 1] : currentDirection = directions[direction -= 1]
      return currentDirection
  }
}

const move = (action: Actions) => {
  switch (action) {
    case 'E':
      if (position.y !== 0) {
        position.y -= 1
        return position.y
      }
      break
    case 'D':
      if (position.y !== 4) {
        position.y += 1
        return position.y
      }
      break
    case 'C':
      if (position.x !== 4) {
        position.x += 1
        return position.x
      }
      break
    case 'B':
      if (position.x !== 0) {
        position.x -= 1
        return position.x
      }
      break
    case 'GE':
      return updateDirection(action)
    case 'GD':
      return updateDirection(action)
    case 'M':
      if ((position.y < 4) && (position.y >= 0) && currentDirection === 'D') {
        position.y += 1
        return position.y
      } else if ((position.y > 0) && (position.y <= 4) && currentDirection === 'E') {
        position.y -= 1
        return position.y
      } else if ((position.x < 4) && (position.x >= 0) && currentDirection === 'C') {
        position.x += 1
        return position.x
      } else if ((position.x > 0) && (position.y <= 4) && currentDirection === 'B') {
        position.x -= 1
        return position.x
      }
      break
    default: null
  }
}

export const toInitial = (req: Request, res: Response) => {
  position.x = 0
  position.y = 0
  direction = 0
  return res.status(200).send()
}

export const currentPosition = (req: Request, res: Response) => {
  return res.send({ position, face: currentDirection })
}

export const setPosition = (req: SetRobotMovementRequest, res: Response) => {
  const { move: movements } = req.body

  const validatedMov = movements.map((action: Actions) => {
    if (!defaultMovements.includes(action)) return false
    return action
  })

  if (validatedMov.includes(false)) return res.status(400).send({ erro: 'Um comando inválido foi detectado.' })

  const finalMovement = validatedMov.map((action: Actions) => move(action))

  if (finalMovement.includes(undefined)) {
    return res.status(400).send({
      erro: 'Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de #vvv'
    })
  }

  return res.send({ position })
}
