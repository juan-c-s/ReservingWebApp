const express = require('express')
const router = express.Router()

router.get('/registro', (req, res) => {
    res.render('Registro',)
})

router.post('/registrate', (req, res) => {
    const user = req.body

    //<-------- registrar usuario -------->
    console.log('registrating...')

    res.send(user)
})







module.exports = router