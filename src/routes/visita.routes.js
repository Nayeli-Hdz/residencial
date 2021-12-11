const express = require('express')
const router = express.Router()
const visitaController = require('../controllers/visita.controller');

// Obtiene todos los registros de los Visita
router.get('/', visitaController.findAll);

// Genera un nuevo registro de Visita
router.post('/', visitaController.create);

// Devuelve el detalle de un solo Visita
router.get('/:id', visitaController.findById);

// Modifica un Visita a través del ID
router.put('/:id', visitaController.update);

// Elimina a un Visita a través del ID
router.delete('/:id', visitaController.delete);

module.exports = router