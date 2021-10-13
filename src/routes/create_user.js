//importamos express router
import express from 'express';
const router= express.Router();

//importamos esquema
import users from '../models/users';

//Obtener datos por parametro
router.get('/users/:id', async(req,res)=>{
    try {
        const _id = req.params.id;
        const userDB= await users.findOne({_id});
        res.status(200).json(userDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje:'Ocurrio un error',
                error
            }
        )
    } 

})

//Obtener todos los datos 
router.get('/users', async(req,res)=>{
    try {
        const userDB= await users.find();
        res.status(200).json(userDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje:'Ocurrio un error',
                error
            }
        )
    } 
})





//Crear datos
router.post('/create-user', async(req,res)=>{
    const body= req.body;
    try {
        const userDB= await users.create(body);
        res.status(200).json(userDB);
        
    } catch (error) {
        return res.status(500).json(
            {
                mensaje:'Ocurrio un error',
                error
            }
        )
    }
})

//Eliminar datos
router.delete('/users/:id',async(req,res)=>{
    try {
        const _id = req.params.id;
        const userDB= await users.findByIdAndDelete({_id});
        if(!userDB){
            return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
            });
        };
        res.status(200).json(userDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje:'Ocurrio un error',
                error
            }
        )
    }

})

//Editar datos
router.put('/users/:id',async(req,res)=>{
    const _id = req.params.id;
    const body= req.body;
    try {
        const userDB= await users.findByIdAndUpdate(_id,body,{new:true});
        res.status(200).json(userDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje:'Ocurrio un error',
                error
            }
        )
    }
})

module.exports= router;