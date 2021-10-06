const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const Users_Schema= new Schema({
    cedula: Number,
    nombre: String,
    email: String,
    telefono: Number,
    contraseña: String,
    tipo_usuario: String
})

module.exports= mongoose.model('usuarios', Users_Schema);

