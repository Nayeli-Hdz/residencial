'user strict';
var dbConn = require('../../config/db.config');

//Creación de objeto
var Guardia = function(guardia){
    this.nombre     = guardia.nombre;
	this.apellidos  = guardia.apellidos;
    this.edad       = guardia.edad;
    this.genero     = guardia.genero;
    this.turno      = guardia.turno;
	this.created_at     		= new Date();
    this.updated_at     		= new Date();
};

Guardia.create = function (newGuardia, result) {    
    dbConn.query("INSERT INTO guardia set ?", newGuardia, function (err, res) {
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

Guardia.findById = function (id, result) {
    dbConn.query("Select * from guardia where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Guardia.findAll = function (result) {
    dbConn.query("Select * from guardia", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('guardia : ', res);  
            result(null, res);
        }
    });   
};
Guardia.update = function(id, guardia, result){
  dbConn.query("UPDATE guardia SET nombre=?,apellidos=?,edad=?,genero=?,turno=? WHERE id = ?", [guardia.nombre,guardia.apellidos,guardia.edad,guardia.genero, guardia.turno, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Guardia.delete = function(id, result){
     dbConn.query("DELETE FROM guardia WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Guardia;