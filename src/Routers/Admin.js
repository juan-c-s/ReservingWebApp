const express = require('express')

const router = express.Router()


router.get('/admin', (req, res) => {
    res.render('admin')
})
// router.post('/generarAula', (req, res) => {

// })

router.post('/crearComputador', (req, res) => {
    const info = req.body;

    res.send(info)

    //query para crear computador
})
router.post('/crearAula', (req, res) => {
    const info = req.body;
    res.send(info)
    //query para crear computador
})
router.post('/crearAsistenteTecnico', (req, res) => {
    const info = req.body;
    res.send(info)
    //query para crear computador
})

module.exports = router