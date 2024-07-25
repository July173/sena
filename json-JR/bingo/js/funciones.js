/**
 * Bingo con array en pantlla
 * Autor: JR
 * Fecha: 18 de julio del 2024
 */

document.addEventListener('DOMContentLoaded', function () {
    let Bingo = [];
    let imprimir = '';
    let contador;
    let cantTablas;


    for (cantTablas = 0; cantTablas < 8; cantTablas++) {
        let tablas = [];
        contador = 1;

        for (let filas = 0; filas < 25; filas++) {
            let resultado1 = contador * 2;
            tablas.push(resultado1);
            contador++;
        }

        Bingo.push(tablas);
    }


    let nombre = ['B', 'I', 'N', 'G', 'O'];

    Bingo.forEach((tablas, index) => {
        imprimir += '<div  class="bingo-card ">';
        imprimir += ' <div class="table-responsive">'
        imprimir += '<table class="table table-bordered border-primary ">';
        imprimir += '<thead>';
        imprimir += '<tr>';

        for(let nombreBin=0;nombreBin<5;nombreBin++){
            imprimir += `<th class="table-dark">${nombre[nombreBin]}</th>`;
        }


        imprimir += '</tr>';
                imprimir += '</thead>';
                imprimir += '<tbody>';

                for (let iteracion1 = 5; iteracion1 < 30; iteracion1 += 5) { // Dividir las tablas en filas de 5 celdas cada una
                    imprimir += '<tr>';

                    let coloreariteracion = (iteracion1 - 5) / 5; // numero  de fila calculado 
                    
                    for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
                        let colorCeldas = '';
                       
                        // Colorear celdas especificas
                        if (index === 1 && iteracion2 === 0) colorCeldas = 'bg-secondary';
                        if (index === 2 && iteracion2 === 1) colorCeldas = 'bg-secondary';
                        if (index === 3 && iteracion2 === 2) colorCeldas = 'bg-secondary';
                        if (index === 4 && iteracion2 === 3) colorCeldas = 'bg-secondary';
                        if (index === 5 && iteracion2 === 4) colorCeldas = 'bg-secondary';
                        if (index === 6 && (coloreariteracion === iteracion2 || coloreariteracion + iteracion2 === 4 )) colorCeldas = 'bg-secondary';
                        if (index === 7 && (coloreariteracion === iteracion2||  coloreariteracion+ iteracion2 === 2||coloreariteracion + iteracion2 === 6)) colorCeldas = 'bg-secondary';
                        if (index === 7 && (coloreariteracion + iteracion2 === 4) && iteracion2<3  ) colorCeldas = 'bg-secondary';

                        let filasaumentar = iteracion1 - 5;
                        imprimir += `<td class="${colorCeldas}">${tablas[filasaumentar + iteracion2]}</td>`;
                    }
                
                    imprimir += '</tr>';
                }

                imprimir += '</tbody>';
                imprimir += '</table>';
                imprimir += '</div>';
                imprimir += '</div>';
            });

            document.getElementById('bingo').innerHTML = imprimir;
        });