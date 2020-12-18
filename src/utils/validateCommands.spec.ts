import { Actions } from './types'
import validateCommands from './validateCommands'

describe('Validate M movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['M'])).toBeTruthy()
  })
})

describe('Validate E movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['E'])).toBeTruthy()
  })
})

describe('Validate D movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['D'])).toBeTruthy()
  })
})

describe('Validate B movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['B'])).toBeTruthy()
  })
})

describe('Validate C movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['C'])).toBeTruthy()
  })
})

describe('Validate GE movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['GE'])).toBeTruthy()
  })
})

describe('Validate GD movement', () => {
  test('Should return true.', () => {
    expect(validateCommands(['GE'])).toBeTruthy()
  })
})

describe('Validate All movements', () => {
  test('Should return true.', () => {
    const commands: Actions[] = ['D', 'E', 'C', 'B', 'M', 'GE', 'GD']
    expect(validateCommands(commands)).toBeTruthy()
  })
})
