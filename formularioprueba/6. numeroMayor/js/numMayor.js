/**
 * función saludo
 * auto: JR
 * fecha: 20 de junio de 2024
 */


function generarcampos(){
    const cantNum=  document.getElementById('cantNum').value;
    const campo=  document.getElementById('campos');

    campo.innerHTML= '';

    for(let contador=0; contador<cantNum; contador++){
    const input=  document.createElement('input');
    input.type= 'number';
    input.className= 'numeros';

    campo.appendChild(input);
    }
}

function calcular(){
    const numeros=document.querySelectorAll(' .numeros');
    let mayor= null; // Inicializar `mayor` como null

    numeros.forEach(input=>{
        const valor=parseFloat(input.value);// Convertir el valor del input a un número de punto flotante

    if(!isNaN(valor)){// Verificar si el valor es un número válido
        if(mayor===null || valor>mayor){    // Actualizar `mayor` si es necesario
            mayor=valor;
        }
    }
    });
    if(mayor!==null){ //Verificar si se encontró un número válido
    document.getElementById('mayor').innerHTML=`<strong>El numero mayor es: ${mayor}</strong>`;
    }
    else{
        document.getElementById('mayor').innerHTML=`<strong>No se ingresaron numeros validos</strong>`;

    }
}