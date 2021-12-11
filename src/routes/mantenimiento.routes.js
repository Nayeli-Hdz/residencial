const express = require('express')
const router = express.Router()
const mantenimientoController = require('../controllers/mantenimiento.controller');

// Obtiene todos los registros de los Mantenimiento
router.get('/', mantenimientoController.findAll);

// Genera un nuevo registro de Mantenimiento
router.post('/', mantenimientoController.create);

// Devuelve el detalle de un solo Mantenimiento
router.get('/:id', mantenimientoController.findById);

// Modifica un Mantenimiento a través del ID
router.put('/:id', mantenimientoController.update);

// Elimina a un Mantenimiento a través del ID
router.delete('/:id', mantenimientoController.delete);

module.exports = router