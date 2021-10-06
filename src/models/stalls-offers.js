const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const stalls_offers_Schema= new Schema({
    posicion: String,
    descripcion: String,
    Ubicacion: String,
    URL: String,
    Tipo: String,
    Categoria: String,
    Compañia: String,
    Fecha: Date
})

module.exports= mongoose.model('puesto_ofertas', stalls_offers_Schema);

