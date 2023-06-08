function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablapaciente = document.getElementById("tabla-pacientes")
    const cuerpotabla = tablapaciente.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpotabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent = paciente.nombrepaciente
        const celdaApellido = fila.insertCell()
        celdaApellido.textContent = paciente.apellidopaciente
        const celdacedula = fila.insertCell()
        celdacedula.textContent = paciente.cedula
        const celdaEdad = fila.insertCell()
        celdaEdad.textContent = paciente.edad
        const celdaTelefono = fila.insertCell()
        celdaTelefono.textContent = paciente.telefono
        const celdaEspecialidad = fila.insertCell()
        celdaEspecialidad.textContent = paciente.especialidad

    });

}
mostrarPacientes()