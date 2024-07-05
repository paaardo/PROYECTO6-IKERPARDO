const mongoose = require('mongoose')
const Pais = require('../models/pais')
const Club = require('../models/club')

const mongoURI = process.env.MONGO_URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log(err))

const semillaDB = async () => {
  try {
    await Pais.deleteMany()
    await Club.deleteMany()

    const realMadrid = new Club({ nombre: 'Real Madrid' })
    const barcelona = new Club({ nombre: 'Barcelona' })
    const juventus = new Club({ nombre: 'Juventus' })
    const milan = new Club({ nombre: 'AC Milan' })

    await realMadrid.save()
    await barcelona.save()
    await juventus.save()
    await milan.save()

    const espana = new Pais({
      nombre: 'España',
      clubes: [realMadrid._id, barcelona._id]
    })
    const italia = new Pais({
      nombre: 'Italia',
      clubes: [juventus._id, milan._id]
    })

    await espana.save()
    await italia.save()

    console.log('Clubes creados:')
    console.log(realMadrid)
    console.log(barcelona)
    console.log(juventus)
    console.log(milan)

    console.log('Países creados:')
    console.log(espana)
    console.log(italia)

    console.log('Base de datos sembrada')
    mongoose.connection.close()
  } catch (err) {
    console.error(err)
  }
}

semillaDB()
