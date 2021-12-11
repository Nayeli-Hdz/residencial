//const Residente = require('../models/residente.model');
'use strict';
const Residente = require('../models/residente.model');
const ResidenteModel = require('../models/residente.model');

exports.getResidenteList = (req, res) => {
    ResidenteModel.getAllResidente((err, residente) => {
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Residente', residente);
        res.send(residente)
    })
}

exports.getAllResidenteById = (req, res) => {
    ResidenteModel.getAllResidenteById(req.params.id, (err, residente) => {
        if(err)
        res.send(err);
        console.log('Single car data',residente)
        res.send(residente);
    })
}

exports.createNewResidente = (req, res) => {
    const residenteData = new ResidenteModel(req.body);
    console.log('residenteData',residenteData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Plase fill all fields'});
    }else{
        ResidenteModel.createResidente(residenteData, (err, residente) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Car created successfully', data: residente.insertId})
        })
    }
}

// exports.create = function(req, res) {
//     const new_Residente = new Residente(req.body);
//     //handles null error 
//    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
//     }else{
//         Residente.create(new_Residente, function(err, residente) {
//             if (err)
//             res.send(err);
//             res.json({error:false,message:"Empleado añadido satisfactoriamente.",data:residente});
//         });
//     }
// };


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, llene todos los campos.' });
    }else{
       Residente.update(req.params.id, new Residente(req.body), function(err, residente) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Residente modificado satisfactoriamente.' });
        });
    }
  
};

exports.deleteResidente = (req, res) => {
    ResidenteModel.deleteResidente(req.params.id, (err, residente) => {
        if(err)
        res.send(err);
        res.json({success:true, message: 'Visited deleted successfully'});
    });
}