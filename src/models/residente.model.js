'user strict';
var dbConn = require('../../config/db.config');

var Residente = function (residente) {
    this.nombre = residente.nombre;
    this.apellidos = residente.apellidos;
    this.correo = residente.correo;
    this.telefono = residente.telefono;
    this.lote = residente.lote;
    this.nocasa = residente.nocasa;
    this.calle = residente.calle;
    this.manzana = residente.manzana;
    this.auto = residente.auto;
    this.placas = residente.placas;
    this.created_at     = new Date();
    this.updated_at     = new Date();
}

Residente.getAllResidente = (result) => {
   dbConn.query('SELECT * FROM residente', (err, res) =>{
       if(err) {
           console.log("Error while fetching residente:", err); 
           result(null, err);
       }
       else{
           console.log('Residente fetched successfully');
           result(null, res);
       }
   })
}


Residente.getAllResidenteById = (id, result) => {
   dbConn.query('SELECT * FROM residente WHERE id=?',id, (err, res) =>{
       if(err){
           console.log('Error while fetching residente by id', err);
           result(null, err);
       }else{
           result(null, res);
       }
   })
} 

Residente.createResidente = (residenteData, result) => {
       dbConn.query('INSERT INTO residente SET ? ', residenteData,(err, res) => {
       if(err){
           console.log('Error while inserting data');
           result(null, err);
       }else{
           console.log('Residente created successfully');
           result(null, res)
       }
   })
}

// Residente.create = function (newResidente, result) {    
//     dbConn.query("INSERT INTO residente set ?", newResidente, function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else{
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });           
// };

Residente.update = function(id, residente, result){
    dbConn.query("UPDATE residente SET nombre=?,apellidos=?,correo=?,telefono=?,lote=?, nocasa=?, calle=?,manzana=?,auto=?,placas=? WHERE id = ?", 
    [residente.nombre,residente.apellidos,residente.correo,residente.telefono, residente.lote,residente.nocasa,residente.calle,residente.manzana,residente.auto,residente.placas, residente.id, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };

Residente.deleteResidente = (id, result) => {
   dbConn.query('DELETE FROM residente WHERE id=?',[id],(err, res) => {
       if(err){
           console.log('Error while deleting the visited');
           result(null, err);
       }else {
           result(null, res);
       }
   })
} 

module.exports = Residente;