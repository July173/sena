/**
 * función saludo
 * auto: JR
 * fecha: 20 de junio de 2024
 */

function saludo(){
    
    let saludar = document.getElementById('txtSaludo').value;
    document.getElementById('saludo').innerHTML=`<strong>${saludar}</strong>`;
    return false;
    
}