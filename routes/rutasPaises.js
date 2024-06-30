const express = require('express')
const router = express.Router()
const controladorPaises = require('../controladores/controladorPaises')

router.get('/', controladorPaises.obtenerPaises)
router.get('/:id', controladorPaises.obtenerPais)
router.post('/', controladorPaises.crearPais)
router.patch('/:id', controladorPaises.actualizarPais)
router.delete('/:id', controladorPaises.eliminarPais)

module.exports = router
