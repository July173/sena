/**
 * función Promediar edades
 * auto: JR
 * fecha: 20 de junio de 2024
 */

function generarCampos() {
    const cantFechas = document.getElementById('txtCant').value;
    const camposFechas = document.getElementById('camposFechas');

    camposFechas.innerHTML = '';

    for (let contador = 0; contador < cantFechas; contador++) {
        const input = document.createElement('input');
        input.type = 'date';
        input.className = 'fecha';

        camposFechas.appendChild(input);
    }

}

function calcularEdad(FechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(FechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function calcularPromedio() {
    const fechas = document.querySelectorAll(' .fecha');
    let suma = 0;
    let cont = 0;

    fechas.forEach(input => {
        const fecha = input.value;
        if (fecha) {
            const edad = calcularEdad(fecha);
            suma += edad;
            cont++;

        }

    });
    const promedio = suma / cont;
    document.getElementById('promedio').innerHTML = `<strong> el promedio de las edades es de:</strong> ${promedio} años`;

}

function mostrarEdades() {
    const fechas = document.querySelectorAll(' .fecha');
    const listaEdades = document.getElementById('edades');
    listaEdades.innerHTML = '';

    fechas.forEach((input, index) => {
        const fecha = input.value;
        if (fecha) {
            const edad = calcularEdad(fecha);
            document.getElementById('edades').innerHTML += `<strong> Persona ${index + 1}:</strong> ${edad} años</br>`;

        }
    });
}
