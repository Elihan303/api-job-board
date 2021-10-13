import mongoose from 'mongoose';
const Schema= mongoose.Schema;

//creamos modelo
const Admins_Schema= new Schema({
    cedula: Number,
    nombre: String,
    email: String,
    telefono: Number,
    contraseña: String,
})

//module.exports= mongoose.model('admins', Admins_Schema);

//Convertir a modelo
const admins= mongoose.model('admins', Admins_Schema);
export default admins;
