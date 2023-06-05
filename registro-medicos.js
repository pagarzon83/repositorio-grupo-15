<<<<<<< HEAD
const formularioRegistro = document.getElementById("registro-medicos-form")
const nombre = document.getElementById("nombre")
const apellido= document.getElementById("apellido")
const cedula= document.getElementById("cedula")
const consultorio= document.getElementById("consultorio")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")

formularioRegistro.addEventListener('submit',function (event) {
    event.preventDefault();
    const objetoMedico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: consultorio.value,
        correo: correo.value,
        especialidad: especialidad.value,
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos =JSON.parse(localMedicos)
    }
    medicos.push(objetoMedico)
    localStorage.setItem("medicos",JSON.stringify(medicos))
    formularioRegistro.requestFullscreen()
    alert("Medico registrado con Exito")
=======
const formularioRegistro = document.getElementById("registro-medicos-form")
const nombre = document.getElementById("nombre")
const apellido= document.getElementById("apellido")
const cedula= document.getElementById("cedula")
const consultorio= document.getElementById("consultorio")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")

formularioRegistro.addEventListener('submit',function (event) {
    event.preventDefault();
    const objetoMedico = {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        consultorio: consultorio.value,
        correo: correo.value,
        especialidad: especialidad.value,
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos){
        medicos =JSON.parse(localMedicos)
    }
    medicos.push(objetoMedico)
    localStorage.setItem("medicos",JSON.stringify(medicos))
    formularioRegistro.requestFullscreen()
    alert("Medico registrado con Exito")
>>>>>>> 40261bbe008a11f9f5c1a5440db82cd1596468ee
})