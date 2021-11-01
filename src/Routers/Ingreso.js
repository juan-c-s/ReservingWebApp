const express = require('express')
const router = express.Router()



router.get('/login', (req, res) => {
    res.render('Ingreso', {
        title: "SZS"
    })

})

router.post('/auth', (req, res) => {
    const user = req.body
    res.send(user)
    //<-------- autenticar usuario -------->
    console.log('authenticating...')
})







module.exports = router