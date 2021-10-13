//REQUIRE
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';   
const app = express();

//CONNECTING TO DB
//const uri = 'mongodb://localhost:27017/job-board';
const uri = 'mongodb+srv://elihan_th:7lihXjqsXlvdviXG@cluster0.m2ic9.mongodb.net/job-board?retryWrites=true&w=majority'
const options = {useNewUrlParser: true};

mongoose.connect(uri, options).then(
  () => {console.log('DB Ready')},
  err => {console.log(err)}
);

//SETTINGS
app.set('port',process.env.PORT || 4000);


//MIDDLEWARES

//Comunicacion entre multiples servers
app.use(cors());
//muestra que esta pasando con las peticiones
app.use(morgan('tiny'));
//Sirve para interpretar los datos que viene de un formulario
app.use(express.urlencoded({extended:true}));
//Sirve para entender json
app.use(express.json());

//ROUTES

/* app.use('/api/createjob', require('./routes/create_job.js'))
app.use('/api/jobinfo', require('./routes/job_info.js'))
app.use('/api/viewjob', require('./routes/view_job'))
app.use('/api/login', require('./routes/login_job.js')) */
app.use('/api', require('./routes/create_user'));




// Middleware para Vue.js router modo history
const history=  require ('connect-history-api-fallback');
app.use(history());
//acceder al directorio actual
app.use(express.static(path.join(__dirname, 'public')));



//SERVER START
app.listen(app.get('port'),()=>{
  console.log(`Server on http://localhost:${app.get('port')}`)
})