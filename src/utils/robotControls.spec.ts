import { down, left, right, turnLeft, turnRight, up } from './robotControls'

describe('Move Down', () => {
  test('Should return the final position.', () => {
    expect(down()).toBe(undefined)
  })
})

describe('Move Up', () => {
  test('Should return the final position.', () => {
    expect(up()).toBe(1)
  })
})

describe('Move Right', () => {
  test('Should return the final position.', () => {
    expect(right()).toBe(1)
  })
})

describe('Move Left', () => {
  test('Should return the final position.', () => {
    expect(left()).toBe(0)
  })
})

describe('Turn Left', () => {
  test('Should return the final position.', () => {
    expect(turnLeft()).toBe(3)
  })
})

describe('Turn Right', () => {
  test('Should return the final position.', () => {
    expect(turnRight()).toBe(0)
  })
})
