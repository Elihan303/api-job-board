//importamos express router
import express from 'express';
const router = express.Router();
//import schema
import job from '../models/jobs'


router.post('/', async (req, res) => {
    const body =req.body
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
router.put('/', async (req, res) => {

})

//obtener trabajos
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
router.delete('/', async (req, res) => {

})

module.exports = router;