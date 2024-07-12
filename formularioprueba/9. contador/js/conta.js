/**
 * función saludo
 * auto: JR
 * fecha: 20 de junio de 2024
 */


function contar(){
    let numHasta= document.getElementById('txtNum').value;
    let contador;
    document.getElementById('respuesta').innerHTML+="";    

    for(contador=0; contador<=numHasta; contador++){
          document.getElementById('respuesta').innerHTML+=`<strong>${contador}</strong><br>`;    
    
    }

   return false;
}
