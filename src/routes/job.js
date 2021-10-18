//importamos express router
import express from 'express';
const router = express.Router();
//import schema
import job from '../models/jobs'

const { verificarAuth, verificarAdmin,verificarPoster } = require('../middlewares/authentication');

//crear trabajo
router.post('/',[verificarAuth,verificarPoster,verificarAdmin], async (req, res) => {
    const body = req.body
    body.UsuarioID= req.user._id;

    try {
        const jobDB = await job.create(body);
        res.status(200).json(jobDB);

    } catch (error) {
        return res.status(500).json(
            {
                mensaje: 'Ocurrio un error',
                error
            }
        )
    }

})

//Editar trabajo
router.put('/:id',[verificarAuth,verificarPoster,verificarAdmin], async (req, res) => {
    const _id = req.params.id;
    const body = req.body
    try {
        const jobDB = await job.findByIdAndUpdate(_id, body, { new: true });
        res.status(200).json(jobDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje: 'Ocurrio un error',
                error
            }
        )
    }

})

//obtener todos los trabajos
router.get('/', async (req, res) => {
    try {
        const jobDB = await job.find();
        res.status(200).json(jobDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje: 'Ocurrio un error',
                error
            }
        )
    }

})
//obtener un trabajo por id
router.get('/:id',verificarAuth, async (req, res) => {
    try {
        const _id = req.params.id;
        const jobDB = await job.findOne({ _id });
        res.status(200).json(jobDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje: 'Ocurrio un error',
                error
            }
        )
    }

})

//obtener el cantidad de datos que especifique el admin
router.get('/view/:cant', verificarAuth, async(req,res)=>{
    try {
        const cant = req.params.cant; 
        const jobDB = await job.findOne({ }).limit(cant);
        res.status(200).json(jobDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje: 'Ocurrio un error',
                error
            }
        )
    }
})



//eliminar trabajo
router.delete('/:id',[verificarAuth,verificarPoster,verificarAdmin], async (req, res) => {
    try {
        const _id = req.params.id;
        const jobDB = await users.findByIdAndDelete({ _id });
        if (!jobDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            });
        }
        res.status(200).json(jobDB);
    } catch (error) {
        return res.status(400).json(
            {
                mensaje: 'Ocurrio un error',
                error
            }
        )
    }
})

module.exports = router;