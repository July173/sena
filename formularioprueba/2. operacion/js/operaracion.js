/**
 * función Operacion
 * auto: JR
 * fecha: 20 de junio de 2024
 */

function operar(){
    
    let numUno = parseInt( document.getElementById('txtnumeroUno').value);
    let numDos = parseInt(document.getElementById('txtnumeroDos').value);
    let suma;
    suma=numUno+numDos;

    document.getElementById('operar').innerHTML=`<strong>${suma}</strong>`;
 
    
}   
function restar(){
    
    let numUno = document.getElementById('txtnumeroUno').value;
    let numDos = document.getElementById('txtnumeroDos').value;
    let resta;
    resta=numUno-numDos;

    document.getElementById('operar').innerHTML=`<strong>${resta}</strong>`;
 
}   
function multiplicar(){
    
    let numUno =  document.getElementById('txtnumeroUno').value;
    let numDos = document.getElementById('txtnumeroDos').value;
    let multi;
    multi=numUno*numDos;

    document.getElementById('operar').innerHTML=`<strong>${multi}</strong>`;
  
    
}   
function dividir(){
    
    let numUno =  document.getElementById('txtnumeroUno').value;
    let numDos = document.getElementById('txtnumeroDos').value;
    let divide;

    divide=numUno/numDos;

    document.getElementById('operar').innerHTML=`<strong>${divide}</strong>`;
 
    
}   
