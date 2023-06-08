const formulariomed = document.getElementById("registro-med")
const nombremed = document.getElementById("nombremed")
const apellidosmed = document.getElementById("apellidosmed")
const cedulamed = document.getElementById("cedulamed")
const especialidadmed = document.getElementById("especialidadmed")
const consultorio = document.getElementById("consultorio")
const email = document.getElementById("email")

formulariomed.addEventListener("submit", function (event) {
    event.preventDefault()
    const medico = {
        nombremedico: nombremed.value,
        apellidomedico: apellidosmed.value,
        especialidadmedico: especialidadmed.value,
        consul: consultorio.value,
        correo: email.value
    }
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    formulariomed.reset()
    alert("medico registrado")
})