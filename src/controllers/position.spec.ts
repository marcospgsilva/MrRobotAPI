import request from 'supertest'
import app from '../app'

afterAll(done => {
  done()
})

describe('Move Robot', () => {
  test('Should return 200 if all instructions is valid.', async () => {
    await request(app)
      .post('/move')
      .send({
        move: ['M']
      })
      .expect(200)
  })
})

describe('Move Robot', () => {
  test('Should return 200 if all instructions is valid.', async () => {
    await request(app)
      .post('/move')
      .send({
        move: ['M', 'M', 'GE', 'M', 'M']
      })
      .expect({
        position: {
          x: 2,
          y: 3
        }
      })
  })
})

describe('Move Robot', () => {
  test('Should return 200 if all instructions is valid.', async () => {
    await request(app)
      .post('/move')
      .send({
        move: ['GD', 'M']
      })
      .expect({
        position: {
          x: 2,
          y: 4
        }
      })
  })
})

describe('Move Robot', () => {
  test('Should return 400 if the movement is invalid.', async () => {
    await request(app)
      .post('/move')
      .send({
        move: ['M', 'M', 'M']
      })
      .expect(400)
  })
})

describe('Change Robot to initial position', () => {
  test('Should return 200 if the robot position is changed to the initial value', async () => {
    await request(app)
      .post('/to-initial')
      .expect(200)
  })
})

describe('Move Robot', () => {
  test('Should return 400 if the final position is out of map', async () => {
    await request(app)
      .post('/move')
      .send({
        move: ['GE', 'GE', 'M']
      })
      .expect(400)
  })
})

describe('Move Robot', () => {
  describe('Change Robot to initial position', () => {
    test('Should return 200 if the robot position is changed to the initial value', async () => {
      await request(app)
        .post('/to-initial')
        .expect(200)
    })
  })

  test('Should return 200 if the final position is inside of map', async () => {
    await request(app)
      .post('/move')
      .send({
        move: ['GE', 'M', 'D', 'M', 'D', 'M', 'D', 'M', 'D']
      })
      .expect(200)
  })
})
