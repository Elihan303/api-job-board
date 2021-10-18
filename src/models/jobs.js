import mongoose from 'mongoose';
const Schema= mongoose.Schema;


const tipos={
    values:['full-time', 'part-time', 'freelance'],
    message:'{vale} tipo no valido'
}

//creamos modelo
const job_Schema= new Schema({
    UsuarioID:{typ:String, required:['true','ID obligatorio']},
    Posicion: {type: String, required:[true,'Posicion obligatoria']},
    Descripcion: {type: String, required:[true,'Descripcion obligatoria']},
    Ubicacion: {type: String, required:[true,'Ubicacion obligatoria']},
    URL: String,
    Tipo: {type: String, required:[true,'Tipo obligatoria'],enum: tipos},
    Categoria: {type: String, required:[true,'Categoria obligatoria']},
    Compañia: {type: String, required:[true,'Compañia obligatoria']}
    //Fecha: {type: Date, default: Date.now}
})

//module.exports= mongoose.model('puesto_ofertas', stalls_offers_Schema);

//Convertir a modelo
const job= mongoose.model('trabajos', job_Schema);
export default job;

