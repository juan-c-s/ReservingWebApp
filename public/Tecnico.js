import postData from "./requests.js"

const seleccionarAula = document.getElementById('seleccionarAula')
const aula = document.getElementById('aulaDisponible')
const codigo = document.getElementById('codigoAula')
const mensaje = document.getElementById('mensaje')
const noOlvidesFinalizar = document.getElementById('hundirFinalizar')

const finalizar = document.getElementById('finalizar')


seleccionarAula.addEventListener('click', async (event) => {
    event.preventDefault()
    if (aula.value != "") {
        const info = await postData('/asignarAula', {
            aula: aula.value
        })
        console.log(info)
        codigo.innerText = aula.value
        mensaje.innerText = info.mensaje
        noOlvidesFinalizar.innerText = info.hundirFinalizar

    }
})

finalizar.addEventListener('click', (event) => {
    event.preventDefault()

})