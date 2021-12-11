const express = require('express');
const router = express.Router();

const residenteController = require('../controllers/residente.controller');

// Obtiene todos los registros de los Residente
router.get('/', residenteController.getResidenteList);

// Genera un nuevo registro de Residente
router.get('/:id', residenteController.getAllResidenteById);

// Devuelve el detalle de un solo Residente
router.post('/', residenteController.createNewResidente);

// Modifica un Residente a través del ID
router.put('/:id', residenteController.update);

// Elimina a un Residente a través del ID
router.delete('/:id', residenteController.deleteResidente);



module.exports = router;
