const express = require('express')
const router = express.Router()
const controladorClubes = require('../controladores/controladorClubes.js')

router.get('/', controladorClubes.obtenerClubes)
router.get('/:id', controladorClubes.obtenerClub)
router.post('/', controladorClubes.crearClub)
router.patch('/:id', controladorClubes.actualizarClub)
router.delete('/:id', controladorClubes.eliminarClub)

module.exports = router
