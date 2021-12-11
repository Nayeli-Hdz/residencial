'user strict';
var dbConn = require('../../config/db.config');

//Creación de objeto
var Visita = function(visita){
    this.nombre     = visita.nombre;
	this.fecha  = visita.fecha;
    this.horaentrada       = visita.horaentrada;
    this.horasalida     = visita.horasalida;
    this.casavisitada      = visita.casavisitada;
	// this.created_at     		= new Date();
    // this.updated_at     		= new Date();
};

Visita.create = function (newVisita, result) {    
    dbConn.query("INSERT INTO visita set ?", newVisita, function (err, res) {
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

Visita.findById = function (id, result) {
    dbConn.query("Select * from visita where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Visita.findAll = function (result) {
    dbConn.query("Select * from visita", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('visita : ', res);  
            result(null, res);
        }
    });   
};

Visita.update = function(id, visita, result){
  dbConn.query("UPDATE visita SET nombre=?,fecha=?,horaentrada=?,horasalida=?,casavisitada=? WHERE id = ?", [visita.nombre,visita.fecha,visita.horaentrada,visita.horasalida, visita.casavisitada, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Visita.delete = function(id, result){
     dbConn.query("DELETE FROM visita WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Visita;