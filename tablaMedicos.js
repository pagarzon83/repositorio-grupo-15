function mostrarMedicos() {
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    const tablaMedico = document.getElementById("tabla-medicos")
    const cuerpoTablaMed = tablaMedico.getElementsByTagName("tbody")[0]

    medicos.forEach(medico => {
        let fila = cuerpoTablaMed.insertRow()
        const celdaNombreMedico = fila.insertCell()
        celdaNombreMedico.textContent = medico.nombremedico
        const celdaApellidoMed = fila.insertCell()
        celdaApellidoMed.textContent = medico.apellidomedico
        const celdaespecialidadmed = fila.insertCell()
        celdaespecialidadmed.textContent = medico.especialidadmedico
        const celdaconsultorio = fila.insertCell()
        celdaconsultorio.textContent = medico.consul
        const celdacorreo = fila.insertCell()
        celdacorreo.textContent = medico.correo
    });
}
mostrarMedicos()