export const mapSizeLimit = {
  min: 0,
  max: 4
}

export const position = {
  x: 0,
  y: 0
}

let direction = 0

export const directions = ['D', 'B', 'E', 'C']

export let currentDirection = directions[direction]

export const setDirection = (newDirection: number) => {
  currentDirection = directions[newDirection]
  direction = newDirection
}

export const up = () => {
  if (position.x < mapSizeLimit.max) {
    position.x += 1
    return position.x
  }
}

export const down = () => {
  if (position.x > mapSizeLimit.min) {
    position.x -= 1
    return position.x
  }
}

export const left = () => {
  if (position.y > mapSizeLimit.min) {
    position.y -= 1
    return position.y
  }
}

export const right = () => {
  if (position.y < mapSizeLimit.max) {
    position.y += 1
    return position.y
  }
}

export const turnLeft = () => {
  if (!(direction === 0)) currentDirection = directions[direction -= 1]
  else currentDirection = directions[direction = 3]
  return direction
}

export const turnRight = () => {
  if (!(direction === 3)) currentDirection = directions[direction += 1]
  else currentDirection = directions[direction = 0]
  return direction
}

export const keepAhead = () => {
  return movement[currentDirection]()
}

export const movement = {
  E: left,
  D: right,
  C: up,
  B: down,
  GE: turnLeft,
  GD: turnRight,
  M: keepAhead
}
