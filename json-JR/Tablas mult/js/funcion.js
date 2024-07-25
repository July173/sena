

document.addEventListener('DOMContentLoaded', function(){

    let tabla = [];
    let multiplicar = [];
    let iteracionTabla;
    let iteracionMultiplicador;
    let numeroTabla;
    let numeroMultiplicador;
    let resultadoMultiplicacion;
    let imprimir ='';
    for(iteracionTabla = 0; iteracionTabla<5; iteracionTabla++){
         numeroTabla =iteracionTabla + 1;
         multiplicar = [];
         for(iteracionMultiplicador = 0; iteracionMultiplicador<10; iteracionMultiplicador++){
            numeroMultiplicador = iteracionMultiplicador +1;
            resultadoMultiplicacion = numeroTabla * numeroMultiplicador;
            multiplicar.push(resultadoMultiplicacion);
         }
         tabla.push(multiplicar)
    }
    for(iteracionTabla=0; iteracionTabla<tabla.length; iteracionTabla++){
        numeroTabla = iteracionTabla + 1;
        imprimir += '<div class="col-2">'
        imprimir += '<table class="table table-striped">'
        imprimir += '<thead>'
        imprimir += '<tr>'
        imprimir += '<th scope="col">'
        imprimir += 'Tabla Del ' +numeroTabla
        imprimir += '</th>'
        imprimir += '</tr>'
        imprimir += '</thead>'
        imprimir += '<tbody>'

        for(iteracionMultiplicador = 0; iteracionMultiplicador<multiplicar.length; iteracionMultiplicador++){
            numeroMultiplicador = iteracionMultiplicador + 1;
            imprimir += '<tr>'
            imprimir += '<td>'
            imprimir += numeroTabla+' x '+numeroMultiplicador+' = '+tabla[iteracionTabla][iteracionMultiplicador];
            imprimir += '</td>'
            imprimir += '</tr>'
        }
        imprimir += '</tbody>'
        imprimir += '</table>'
        imprimir += '</div>'
    }
    document.getElementById('tablas').innerHTML = imprimir;
})