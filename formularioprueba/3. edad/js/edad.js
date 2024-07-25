/**
 * función edad
 * auto: JR
 * fecha: 20 de junio de 2024
 */

 function calcularEdad() {
    var hoy = new Date();
    var fechaNac = new Date(document.getElementById('txtFecNa').value);
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
       
    }
    document.getElementById('edad').innerHTML=`<strong>${edad} años</strong>`;
    return edad;
}

function MoM(){
    var edadd=calcularEdad()
    if (edadd<=18){
       descrpcion= "  Es menor de edad";
    }
    else{ (edadd>18)
        descrpcion= "  Es mayor de edad";
    }
    document.getElementById('edad').innerHTML=`${edadd}<strong> años </strong>   <strong>-> ${descrpcion}</strong> `;
   
}

