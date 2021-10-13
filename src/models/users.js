import mongoose from 'mongoose';
const Schema= mongoose.Schema;

//creamos modelo
const Users_Schema= new Schema({
    cedula: {type: Number, required:[true,'Cedula obligatoria']},
    nombre: String,
    email: String,
    telefono: Number,
    contraseña: String,
    tipo_usuario: String
})

//module.exports= mongoose.model('usuarios', Users_Schema);

//Convertir a modelo
const usuarios= mongoose.model('usuarios', Users_Schema);
export default usuarios;
