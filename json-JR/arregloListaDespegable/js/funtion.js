/**
 * Numeros del 1 al 10 usando arreglos en una lista despegable
 * Autor : JR
 * Fecha: 12 de julio del 2024
 */

document.addEventListener('DOMContentLoaded', function () {
    let arreglo = [];
    let iteracion;
    let printResultado = '';
    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (iteracion = 0; iteracion < 10; iteracion++) {
        printResultado += '<option value=" ' + arreglo[iteracion] + ' "> ' + arreglo[iteracion] + '</option>';

    }

    document.getElementById('lista-numeros').innerHTML = printResultado;

    arreglo = [];
    for (iteracion = 0; iteracion < 20; iteracion++) {
        numero = iteracion + 1;
        arreglo.push(numero);
    }

    printResultado = '';

    for (iteracion = 0; iteracion < arreglo.length; iteracion++) {
        printResultado += '<option value=" ' + arreglo[iteracion] + ' "> ' + arreglo[iteracion] + '</option>';
    }
    document.getElementById('lista-dos-numeros').innerHTML = printResultado;

})