
const express = require('express')
const router = express.Router()
const dbFuncs = require('../db/db')


router.get('/getInfo', (req, res) => {

})

router.get('/Solicitud',async (req, res) => {

    try {
    await dbFuncs.getAulasNumbers(res)
    } catch(e){
        console.log(e)
    }
   
})

router.post('/solicitar', async (req, res) => {
    const solicitud  = req.body
    const usuario = 4456
    // esto se borra ciando termines el auth

    try {
        await dbFuncs.hacerSolicitudDeMantenimiento(solicitud['idComputador'],usuario,solicitud['solicitud'])
        console.log("solicitud creada")
    } catch (e) {
        console.log(e)
    }

})

router.post('/getComputadores',async (req, res) => {
    const aula = req.body.aula;

    try {
        await dbFuncs.getComputadoresInAula(aula,res)
    } catch (e) {
        console.log(e)
    }
    
})


router.delete('/finalizarServicio', (req, res) => {
    console.log('borrar el de mantenimiento de la tabla de la clase y editar al de mantenimiento como disponible')
    //BORRAR EL ATRIBUTO DE MANTENIMIENTO DE LA TABLA DE LA CLASE, PUES YA NO VA A HABER PERSONAL ALLÁ
})



module.exports = router