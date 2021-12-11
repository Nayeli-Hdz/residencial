const express = require('express')
const router = express.Router()
const mantenimientoController = require('../controllers/mantenimiento.controller');

// Obtiene todos los registros de los Guardias
router.get('/', mantenimientoController.findAll);

// Genera un nuevo registro de Guardias
router.post('/', mantenimientoController.create);

// Devuelve el detalle de un solo Guardia
router.get('/:id', mantenimientoController.findById);

// Modifica un Guardia a través del ID
router.put('/:id', mantenimientoController.update);

// Elimina a un Guardia a través del ID
router.delete('/:id', mantenimientoController.delete);

module.exports = router