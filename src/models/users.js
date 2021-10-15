import mongoose from 'mongoose';
const Schema= mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const tipos= {
    values:['user','poster','admin'],
    message:'{value} rol no valido'
}

//creamos modelo
const Users_Schema= new Schema({
    cedula: {type: Number, required:[true,'Cedula obligatoria']},
    nombre: {type: String, required:[true,'Nombre obligatoria']},
    email:  {type: String, required:[true,'Correo obligatoria'], unique: true},
    telefono: {type: Number, required:[true,'telefono obligatoria']},
    contraseña: {type: String, required:[true,'Contraseña obligatoria']},
    tipo_usuario: {type: String, required:[true,'Nombre obligatoria'], default: 'user', enum: tipos}
})

//module.exports= mongoose.model('usuarios', Users_Schema);

//validar email
Users_Schema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

// Eliminar pass de respuesta JSON
Users_Schema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.contraseña;
    return obj;
   }

//Convertir a modelo
const usuarios= mongoose.model('usuarios', Users_Schema);
export default usuarios;
