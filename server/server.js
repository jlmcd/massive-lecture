require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/class', ctrl.getClass)
app.put('/api/class/:id', ctrl.updateClassmate)
app.post('/api/class', ctrl.addMate)
app.delete('/api/class/:id', ctrl.deleteMate)

massive(CONNECTION_STRING)
.then((database) => {
  app.set('db', database)
  app.listen(SERVER_PORT, () =>
    console.log(`The power level is over ${SERVER_PORT}!!!`)
  )
})