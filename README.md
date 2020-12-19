#  Mr.Robot API


This is an API created with NodeJS to control a robot that is on Mars. For the user is possible to see the current position, send new movements, and set the robot to its initial position.

## 🚀 Installation

Clone the repository 

```bash
git@github.com:marcospgsilva/MrRobotAPI.git
```
Install the dependencies:
```bash
npm install or npm i
```

Run the following command to run the server:
```bash
npm run dev
```

If you want, run the following command to run the tests:
```bash
npm run test
```

## 📝 How to use

First, if you are running the server locally the base URL will be:

`http://localhost:3333`


The production URL is:

`https://mr-robot-api.herokuapp.com/`

### ✅ Valid commands:

- M: moves ahead
- D: moves to the right
- E: moves to the Left
- C: moves up
- B: moves down
- GD: turn to the right
- GE: turn to the left

#### 📑 The API has 3 endpoints:

#### /to-initial (POST):
This endpoint will set the robot to initial position.

#### /current-position (GET):
This endpoint will return the robot's current position.
The response will be a JSON:

Example:

```
{
  "position": {
    "x": 0,
    "y": 0
  },
  "face": "D"
}
```

#### /move (POST):
This endpoint receives a JSON with a move key that is an array of commands.
Example:

```
{
 "move": ["M", "C", "GE"]
}
```

If are valid commands, the response will be a JSON with the final position:

Example:

```
{
  "position": {
    "x": 1,
    "y": 1
  }
}
```

If the final position it's out of the size of the map, the response will throw an error with the message:

```
{
  "erro": "Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de #vvv"
}
```


If it is an invalid command, the response will throw an error with the message:

```
{
  "erro": "Um comando inválido foi detectado."
}
```

## 🖥 Technologies

This project was developed with the following technologies:

-  [Node.js](https://nodejs.org/)
-  [Express](https://expressjs.com/)
-  [nodemon](https://nodemon.io/)
-  [Jest](https://jestjs.io/)
-  [Heroku](https://heroku.com/)
