const {Router}= require('express');
const router= Router();
const _= require('underscore');

router.get('/', (req,res)=>{
    res.render('login_job.ejs');

})
router.post('/',(req,res)=>{})
router.delete('/',(req,res)=>{})
router.patch('/',(req,res)=>{})

module.exports= router;