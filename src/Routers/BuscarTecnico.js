const express = require('express')
const router = express.Router()
const dbFuncs = require('../db/db')

router.get('/buscarTecnico', async (req, res) => {

    try {
        await dbFuncs.getNumeroAulasgetAsistenteTecnico(res)
    } catch (e) {
        console.log(res)
    }
    
})

router.post('/getAsistente',async (req,res)=>{
    const aula = req.body.aula
    try {
        await dbFuncs.buscarTecnicoPorAula(aula,res)
    } catch (e) {
        console.log(e)
    }
})


module.exports = router;