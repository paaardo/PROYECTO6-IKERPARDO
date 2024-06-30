require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const puerto = process.env.PORT || 3000

app.use(bodyParser.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('BBDD conectado'))
  .catch((err) => console.log(err))

const rutasPaises = require('./routes/rutasPaises')
const rutasClubes = require('./routes/rutasClubes')
app.use('/api/paises', rutasPaises)
app.use('/api/clubes', rutasClubes)

app.get('/', (req, res) => {
  res.send('Servidor funcionando')
})

app.listen(puerto, () => {
  console.log(`Estamos en el puerto ${puerto}`)
})
