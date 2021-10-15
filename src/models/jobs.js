import mongoose from 'mongoose';
const Schema= mongoose.Schema;

//creamos modelo
const job_Schema= new Schema({
    Posicion: String,
    Descripcion: String,
    Ubicacion: String,
    URL: String,
    Tipo: String,
    Categoria: String,
    Compañia: String,
    Fecha: Date
})

//module.exports= mongoose.model('puesto_ofertas', stalls_offers_Schema);

//Convertir a modelo
const job= mongoose.model('trabajos', job_Schema);
export default job;
