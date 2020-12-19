import { Response } from 'express'

export const invalidFormatRequest = (res: Response) => {
  return res.status(400).json({ erro: 'Formato inválido, verifique o corpo da sua requisição' })
}

export const invalidCommands = (res: Response) => {
  return res.status(400).json({ erro: 'Um comando inválido foi detectado.' })
}

export const invalidFinalPosition = (res: Response) => {
  return res.status(400).json({ erro: 'Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de voar' })
}
