const Club = require('../models/club')

exports.obtenerClubes = async (req, res) => {
  try {
    const clubes = await Club.find()
    res.json(clubes)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.obtenerClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
    if (club == null) {
      return res.status(404).json({ message: 'No se puede encontrar el club' })
    }
    res.json(club)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.crearClub = async (req, res) => {
  const club = new Club({
    nombre: req.body.nombre
  })

  try {
    const nuevoClub = await club.save()
    res.status(201).json(nuevoClub)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.actualizarClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
    if (!club) {
      return res.status(404).json({ message: 'No se puede encontrar el club' })
    }

    if (req.body.nombre != null) {
      club.nombre = req.body.nombre
    }

    const clubActualizado = await club.save()
    res.json(clubActualizado)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.eliminarClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
    if (!club) {
      return res.status(404).json({ message: 'No se puede encontrar el club' })
    }
    await club.remove()
    res.json({ message: 'Club eliminado' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
