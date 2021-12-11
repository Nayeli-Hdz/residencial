const express =require('express');
const bodyParser = require('body-parser');

//  create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// Parse request data content type application
app.use(bodyParser.urlencoded({extended: false}));

// Parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/',(req, res)=>{
    res.send('Hello Word');
});

// Import visited routes
const residenteRoutes = require('./src/routes/residente.routes');
const guardiaRoutes = require('./src/routes/guardia.routes');
const mantenimientoRoutes = require('./src/routes/mantenimiento.routes');
const visitaRoutes = require('./src/routes/visita.routes');

// Create visited routes
app.use('/api/v1/residente', residenteRoutes);
app.use('/api/v1/guardia', guardiaRoutes);
app.use('/api/v1/mantenimiento', mantenimientoRoutes);
app.use('/api/v1/visita', visitaRoutes);

//listen to the port
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});