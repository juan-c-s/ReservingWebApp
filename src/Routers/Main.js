
//main -----> reserva computadores
const express = require('express');
const router = express.Router();
const dbFuncs = require('../db/db');


router.post('/getDisponibles', async (req, res) => {
    const body = req.body;
    const horario = body.hora;
    const aula = Number(body.aula);

    try{
       await dbFuncs.getAvailableTimes(horario,aula,res);
    }catch(e){
        console.log(e);
        console.log("error in get times")
    }
        
})



router.get('/Main', async (req, res) => {
    let horario = [];
    for (let index = 10; index < 20; index++) {
        horario.push(index + '-' + (index + 1))
    }

    try{
        let aulas = await dbFuncs.getAulas(res,horario)
    }catch{
        console.log("Failed to get aulas number")
    }

})


router.post('/reservar', async (req, res) => {
    const reserva = req.body
    const usuarioID = 4455;
    // esto se cambia por el id del usuario que esta log in 
    //AUTENTICACION
    
    try{
        await dbFuncs.hacerReserva(usuarioID,reserva.id,reserva.hora)
        res.send("")
    }catch{
        console.log("failed to create Reserva")
    }

})

router.post('/getSPECS', async (req, res) => {
    const idComputador = req.body.id;
    //hacer la query para tener la información del computador
    //BASE DE DATOS

    try{
        await dbFuncs.getInformationOfComputer(idComputador,res)
    }catch{
        console.log("failed to get specs of computer")
    }
})






module.exports = router