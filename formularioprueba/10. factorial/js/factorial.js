/**
 * función saludo
 * auto: JR
 * fecha: 20 de junio de 2024
 */



function calcular(){
    let NumHasta=document.getElementById('txtNum').value;
    let resultado=1;
    document.getElementById('respuesta').innerHTML="";

    for(contador=1;contador<=NumHasta;contador++){
        resultado=resultado*contador;
        document.getElementById('respuesta').innerHTML+=`<strong>${resultado}</strong> <br>`;

    }
    return false;

}