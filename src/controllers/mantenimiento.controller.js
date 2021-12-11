'use strict';

const Mantenimiento = require('../models/mantenimiento.model');

exports.findAll = function(req, res) {
  Mantenimiento.findAll(function(err, mantenimiento) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', mantenimiento);
    res.send(mantenimiento);
  });
};


exports.create = function(req, res) {
    const new_Mantenimiento = new Mantenimiento(req.body);
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Mantenimiento.create(new_Mantenimiento, function(err, mantenimiento) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Empleado añadido satisfactoriamente.",data:mantenimiento.insertId});
        });
    }
};


exports.findById = function(req, res) {
    Mantenimiento.findById(req.params.id, function(err, mantenimiento) {
        if (err)
        res.send(err);
        res.json(mantenimiento);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Mantenimiento.update(req.params.id, new Mantenimiento(req.body), function(err, mantenimiento) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Empleado modificado satisfactoriamente.' });
        });
    }
  
};


exports.delete = function(req, res) {
  Mantenimiento.delete( req.params.id, function(err, mantenimiento) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Guard successfully deleted' });
  });
};