const express = require('express')
const router = express.Router()




router.get('/login', (req, res) => {
    res.render('Ingreso', {
        title: "SZS"
    })

})

router.post('/auth', async (req, res) => {
    const user = req.body
    console.log(user)
    try {
        let responce = await dbFuncs.logIn(user.username, user.password);
        console.log(responces)
    } catch {
        console.log("Failed to find user")
    }


    //<-------- autenticar usuario -------->
    console.log('authenticating...')
})







module.exports = router