/**
 * función calcular area de circunferencia 
 * auto: JR
 * fecha: 20 de junio de 2024
 */


function calcular (){
    let radio = document.getElementById('txtRadio').value;
    let pi= 3.1416;
    let areaCircun;
    areaCircun= pi*Math.pow (radio,2)
    document.getElementById('Calcular').innerHTML=`<strong>${areaCircun} m² </strong>`;
    return false;
}