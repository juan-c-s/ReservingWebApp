const express = require('express');
const router = express.Router();
const dbFuncs = require('../db/db');


router.get('/registro', (req, res) => {
    res.render('Registro')
})

router.post('/registrate', async (req, res) => {
    const user = req.body
   
    try{
        await dbFuncs.Register(user.codigo,user.nombre,user.email,user.password);
        console.log("user created : ")
        console.log(user)
    }catch{
        console.log('Failed to create user')
    }


    res.send(user)
})







module.exports = router