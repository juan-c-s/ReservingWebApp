
const express = require('express')
const router = express.Router()


router.get('/getInfo', (req, res) => {

})

router.get('/Solicitud', (req, res) => {
    res.render('SolicitudMante')
})

router.post('/solicitar', (req, res) => {
    const computador = req.body
    //<-------- contactando mantenimiento -------->
    console.log('solicitando...')
    //MANDAR EMAIL A MANTENIMIENTO
    res.send(computador)

})



router.delete('/finalizarServicio', (req, res) => {
    console.log('borrar el de mantenimiento de la tabla de la clase y editar al de mantenimiento como disponible')
    //BORRAR EL ATRIBUTO DE MANTENIMIENTO DE LA TABLA DE LA CLASE, PUES YA NO VA A HABER PERSONAL ALLÁ
})



module.exports = router