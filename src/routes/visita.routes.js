const express = require('express')
const router = express.Router()
const visitaController = require('../controllers/visita.controller');

// Obtiene todos los registros de los Guardias
router.get('/', visitaController.findAll);

// Genera un nuevo registro de Guardias
router.post('/', visitaController.create);

// Devuelve el detalle de un solo Guardia
router.get('/:id', visitaController.findById);

// Modifica un Guardia a través del ID
router.put('/:id', visitaController.update);

// Elimina a un Guardia a través del ID
router.delete('/:id', visitaController.delete);

module.exports = router