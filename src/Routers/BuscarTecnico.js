const express = require('express')
const router = express.Router()

router.get('/buscarTecnico', (req, res) => {
    res.render('buscarTecnico')
})


module.exports = router;