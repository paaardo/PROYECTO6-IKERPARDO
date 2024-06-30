const Pais = require('../models/pais')

exports.obtenerPaises = async (req, res) => {
  try {
    const paises = await Pais.find().populate('clubes')
    res.json(paises)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.obtenerPais = async (req, res) => {
  try {
    const pais = await Pais.findById(req.params.id).populate('clubes')
    if (pais == null) {
      return res.status(404).json({ message: 'No se puede encontrar el país' })
    }
    res.json(pais)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.crearPais = async (req, res) => {
  const pais = new Pais({
    nombre: req.body.nombre,
    clubes: req.body.clubes || []
  })

  try {
    const nuevoPais = await pais.save()
    res.status(201).json(nuevoPais)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.actualizarPais = async (req, res) => {
  try {
    const pais = await Pais.findById(req.params.id)
    if (!pais) {
      return res.status(404).json({ message: 'No se puede encontrar el país' })
    }

    if (req.body.nombre != null) {
      pais.nombre = req.body.nombre
    }
    if (req.body.clubes != null) {
      const nuevosClubes = req.body.clubes
      nuevosClubes.forEach((club) => {
        if (!pais.clubes.includes(club)) {
          pais.clubes.push(club)
        }
      })
    }

    const paisActualizado = await pais.save()
    res.json(paisActualizado)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.eliminarPais = async (req, res) => {
  try {
    const pais = await Pais.findById(req.params.id)
    if (!pais) {
      return res.status(404).json({ message: 'No se puede encontrar el país' })
    }
    await pais.remove()
    res.json({ message: 'País eliminado' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
