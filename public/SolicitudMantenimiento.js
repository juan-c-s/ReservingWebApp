
import postData from "./requests.js";
const solicitudText = document.getElementById('solicitudTexto')
const aula = document.getElementById('seleccionarAula')
const computador = document.getElementById('seleccionarComputador')
const botonEnviar = document.getElementById('botonEnviar')

botonEnviar.addEventListener('click', async (event) => {
    event.preventDefault();
    const info = await postData('/solicitar', {
        idComputador: computador.value,
        aula: aula.value,
        solicitud: solicitudText.value,
    })
    console.log(info)

    aula.value = ""
    solicitudText.value = ""
    computador.value = ""

})