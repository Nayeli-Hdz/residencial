'use strict';

const Visita = require('../models/visita.model');

exports.findAll = function(req, res) {
  Visita.findAll(function(err, visita) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', visita);
    res.send(visita);
  });
};


exports.create = function(req, res) {
    const new_Visita = new Visita(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Visita.create(new_Visita, function(err, visita) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Empleado añadido satisfactoriamente.",data:visita.insertId});
        });
    }
};


exports.findById = function(req, res) {
    Visita.findById(req.params.id, function(err, visita) {
        if (err)
        res.send(err);
        res.json(visita);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
        Visita.update(req.params.id, new Visita(req.body), function(err, visita) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Empleado modificado satisfactoriamente.' });
        });
    }
  
};


exports.delete = function(req, res) {
  Visita.delete( req.params.id, function(err, visita) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Guard successfully deleted' });
  });
};