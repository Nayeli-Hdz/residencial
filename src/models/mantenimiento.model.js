'user strict';
var dbConn = require('../../config/db.config');

//Creación de Objeto Guardia
var Mantenimiento = function(mantenimiento){
    this.nombre     = mantenimiento.nombre;
	this.apellidos  = mantenimiento.apellidos;
    this.edad       = mantenimiento.edad;
    this.tipo     = mantenimiento.tipo;
    this.telefono      = mantenimiento.telefono;
	// this.created_at     		= new Date();
    // this.updated_at     		= new Date();
};

Mantenimiento.create = function (newMantenimiento, result) {    
    dbConn.query("INSERT INTO mantenimiento set ?", newMantenimiento, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Mantenimiento.findById = function (id, result) {
    dbConn.query("Select * from mantenimiento where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Mantenimiento.findAll = function (result) {
    dbConn.query("Select * from mantenimiento", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('mantenimiento : ', res);  
            result(null, res);
        }
    });   
};

Mantenimiento.update = function(id, mantenimiento, result){
  dbConn.query("UPDATE mantenimiento SET nombre=?,apellidos=?,edad=?,tipo=?,telefono=? WHERE id = ?", [mantenimiento.nombre,mantenimiento.apellidos,mantenimiento.edad,mantenimiento.tipo, mantenimiento.telefono, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Mantenimiento.delete = function(id, result){
     dbConn.query("DELETE FROM mantenimiento WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Mantenimiento;