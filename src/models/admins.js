const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const Admins_Schema= new Schema({
    cedula: Number,
    nombre: String,
    email: String,
    telefono: Number,
    contraseña: String,
})

module.exports= mongoose.model('admins', Admins_Schema);
