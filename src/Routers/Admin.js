const express = require('express')
const router = express.Router()
const dbFuncs = require('../db/db')

router.get('/admin', (req, res) => {
    res.render('admin')
})

router.post('/crearComputador', async (req, res) => {
    const info = req.body;
    
    try {
        await dbFuncs.addComputador(info.id,info.GPU,info.CPU,info.RAM,info.aula)
        res.status(200)
    } catch (error) {
        console.log(error)
    }

    res.send(info)

})
router.post('/crearAula', async(req, res) => {
    const info = req.body;
    try {
        await dbFuncs.addAula(info.aula,info.cupoMaximo,info.idAsistente)
        res.status(200)
    } catch (error) {
        console.log(error)
    }
    res.send(info)

})
router.post('/crearAsistenteTecnico', async(req, res) => {
    const info = req.body;
    
    try {
        await dbFuncs.addAsistenteTecnico(info.idAsistente,info.nombre,info.correo,info.celular)
        res.status(200)
    } catch (error) {
        console.log(error)
        res.status(404)
    }

    res.send(info)
})

module.exports = router