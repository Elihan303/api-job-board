import express from 'express';
const router = express.Router();
//underscore
const _ = require('underscore');
//importamos esquema
import users from '../models/users';
// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;
//json webtoken
const jwt = require('jsonwebtoken');



router.get('/', (req, res) => {
    res.json({ mensaje: 'funcionando' });

})
//Validar usuario en la base de datos
router.post('/', async (req, res) => {
    let body = req.body;
    try {

        //Evaluando email
        const usuarioDB = await users.findOne({ email: body.email });
        if (!usuarioDB) {
            return res.status(400).json({
                mensaje: 'Email no encontrado'
            })
        }
        //Evaluar contraseña
        if (!bcrypt.compareSync(body.contraseña, usuarioDB.contraseña)) {
            return res.status(400).json({
                mensaje: 'Contraseña incorrecta'
            })
        }


        // Generar Token
        let token = jwt.sign({
            data: usuarioDB
        }, 'secret', { expiresIn: 60 * 60 * 24 * 30 }) // Expira en 30 días

        res.json({
            usuarioDB,
            token: token
        })


    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })

    }



})




router.delete('/', (req, res) => { })
router.put('/', (req, res) => { })

module.exports = router;