/**
 * función Notas promedio 
 * auto: JR
 * fecha: 20 de junio de 2024
 */

function generarCampos(){
    const cantNotas=  document.getElementById('txtNotaCant').value;
    const camposNotas =  document.getElementById('camposNotas');

    camposNotas.innerHTML= '';

    for(let contador=0; contador< cantNotas; contador++){
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'notas';

        camposNotas.appendChild(input);
    }
}

function promediar(){
    const notas= document.querySelectorAll('.notas');
    let suma = 0;
    let cont = 0;

    notas.forEach(input =>{
        const nota= parseFloat(input.value);
        if(!isNaN(nota)){
            suma += nota;
            cont++;
        }
    });
    const promedio = suma/ cont;
    document.getElementById('promedio').innerHTML=`<strong>El promedio de las notas es: ${promedio.toFixed(2)}</strong>`;


}
