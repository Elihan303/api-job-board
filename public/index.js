//REQUIRE
const express = require('express')
const app = express();
const morgan = require('morgan');

//SETTINGS
app.set('port',process.env.PORT || 4000);


//MIDDLEWARES 

//muestra que esta pasando con las peticiones
app.use(morgan('dev'));
//Sirve para interpretar los datos que viene de un formulario
app.use(express.urlencoded({extended:false}));
//Sirve para entender json
app.use(express.json());

//ROUTES
app.use('/api/createjob', require('./routes/create_job.js'))
app.use('/api/jobinfo', require('./routes/job_info.js'))
app.use('/api/viewjob', require('./routes/view_job'))




//SERVER START
app.listen(app.get('port'),()=>{
  console.log(`Server on http://localhost:${app.get('port')}`)
})