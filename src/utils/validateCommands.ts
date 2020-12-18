import { movement } from './robotControls'
import { Actions } from './types'

const validateCommands = (commands: Actions[]) => {
  const validatedCommands = commands.map((action: Actions) => {
    if (!movement[action]) return false
    return action
  })
  if (validatedCommands.includes(false)) return false
  return true
}

export default validateCommands
