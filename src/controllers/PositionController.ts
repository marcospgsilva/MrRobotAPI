import { Response, Request } from 'express'

import { currentDirection, movement, position, setDirection } from '../utils/robotControls'
import type { SetRobotMovementRequest, Actions } from '../utils/types'
import validateCommands from '../utils/validateCommands'

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

  if (!commands) return res.status(400).json({ erro: 'Formato inválido, verifique o corpo da sua requisição' })
  if (!validateCommands(commands)) return res.status(400).json({ erro: 'Um comando inválido foi detectado.' })

  const finalPosition = commands.map((action: Actions) => movement[action]())

  if (finalPosition.includes(undefined)) return res.status(400).json({ erro: 'Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de #vvv' })

  return res.json({ position })
}
