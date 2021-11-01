
//main -----> reserva computadores
const express = require('express')

const router = express.Router()


router.post('/getDisponibles', (req, res) => {
    const body = req.body;
    // const horario = body.horario;
    const aula = body.aula;

    //buscar la forma de pasar la info a hbs sin tener que renderizar, ya que no se puede hacer res.render porque esa operación ya fué usada
    //query computadores disponibles
    //debe mandar la información de los computadores para renderizarlos
    // res.render('reservarComputadora', {

    // })
    // res.render(pasar objeto al hbs )
    //BASE DE DATOS
    res.send([1, 2, 3, 4, 5])
})

router.get('/Main', (req, res) => {
    let horario = [];
    for (let index = 10; index < 20; index++) {
        horario.push(index + '-' + (index + 1))
    }

    res.render('reservarComputadora', {
        usuario: "tomascaell",
        aulas: [

            '34-305',
            '23-203',
            '21-102',
            '17-103',
        ],
        horario,

    })
})


router.post('/reservar', (req, res) => {
    const computador = req.body
    //<-------- autenticar usuario -------->
    console.log('reservando...')
})

router.post('/getSPECS', (req, res) => {
    const idComputador = req.body.id;
    //hacer la query para tener la información del computador
    //BASE DE DATOS
    console.log(idComputador)
    res.send({ text: "To check your PC hardware specs, from the desktop find the icon that is labeled “My Computer”. Right-click on this and select Properties. A window should appear summarizing your PC hardware specs including processor, Memory (RAM), and other system info, including Windows version." })
})






module.exports = router