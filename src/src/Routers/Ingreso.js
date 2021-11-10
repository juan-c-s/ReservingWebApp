const express = require('express')
const router = express.Router()
const dbFuncs = require('../db/db')



router.get('/login', (req, res) => {
    res.render('Ingreso', {
        title: "SZS"
    })

})

 router.post('/auth',async (req, res) => {
    const user = req.body
    console.log(user)
    try{
        await dbFuncs.logIn(user.username,user.password,res);
    }catch{
        res.send(3)
    }
    

    //<-------- autenticar usuario -------->
    console.log('authenticating...')
})







module.exports = router