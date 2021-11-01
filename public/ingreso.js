import postData from './requests.js'


const loginButon = document.getElementById('botonLogin')
const username = document.getElementById('loginUsername')
const password = document.getElementById('loginPassword')
const registro = document.getElementById('botonIrRegistro')
loginButon.addEventListener('click', async (event) => {
    event.preventDefault();
    const data = await postData('/auth', { username: username.value, password: password.value })
    console.log(data)//información que viene del servidor
    username.value = ""
    password.value = ""
})
registro.onclick = () => {
    location.href = "/registro"
}

