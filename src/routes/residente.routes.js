const express = require('express');
const router = express.Router();

const residenteController = require('../controllers/residente.controller');

//  Get all car
router.get('/', residenteController.getResidenteList);

// Get car by id
router.get('/:id', residenteController.getAllResidenteById);

// Craete new car
router.post('/', residenteController.createNewResidente);

// Update Car
router.put('/:id', residenteController.update);

// Delete Car
router.delete('/:id', residenteController.deleteResidente);



module.exports = router;
