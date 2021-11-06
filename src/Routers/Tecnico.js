const express = require('express')

const router = express.Router()


router.get('/tecnico', (req, res) => {
    res.render('tecnico', {
        aulasDisponibles: [
            '35302',
            '35302',
            '35302',
        ],
        usuario: 'tomas'
    })
})
router.post('/asignarAula', (req, res) => {
    const info = req.body

    //tirar query para asignarle el asistente al aula
    res.send({
        hundirFinalizar: 'No olvides hundir finalizar cuando hayas terminado en esa aula para que puedas atender a mas!',
        mensaje: 'Gracias por ayudar a nuestros estudiantes'
    })
})


router.post('/asignarAula', (req, res) => {
    const info = req.body
    res.send({
        hundirFinalizar: 'No olvides hundir finalizar cuando hayas terminado en esa aula para que puedas atender a mas!',
        mensaje: 'Gracias por ayudar a nuestros estudiantes'
    })
})

module.exports = router