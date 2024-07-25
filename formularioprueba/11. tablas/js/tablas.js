/**
 * función Calcular tablas
 * auto: JR
 * fecha: 26 de junio de 2024
 */


function Calcular() {
  var tabla = document.getElementById('txtTabla').value;
  var multiplicador = document.getElementById('txtMultiplica').value;
  var resultado = 0;
  var contPares = 0;
  var contImpar = 0;
  document.getElementById('respuesta').innerHTML = "";
  for (var contTabla = 1; contTabla <= tabla; contTabla++) {
    for (var contMulti = 1; contMulti <= multiplicador; contMulti++) {
      resultado = contTabla * contMulti;

      if (document.getElementById('txtbob').value == 'si' && resultado % 2 == 0 && document.getElementById('txtpop').value == 'si') {

        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} buzz</strong><br>`;
        contPares++;


      } else if (document.getElementById('txtbob').value == 'si' && resultado % 2 == 0 && document.getElementById('txtpop').value == 'no') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} buzz</strong><br>`;
      }
      else if (document.getElementById('txtbob').value == 'no' && resultado % 2 == 0 && document.getElementById('txtpop').value == 'si') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} </strong><br>`;
        contPares++;
      }
      else if (document.getElementById('txtbob').value == 'no' && resultado % 2 == 0 && document.getElementById('txtpop').value == 'no') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} </strong><br>`;

      }

      else if (document.getElementById('txtbob').value == 'si' && resultado % 2 == 1 && document.getElementById('txtpop').value == 'si') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado}bass</strong><br>`;
        contImpar++;

      }
      else if (document.getElementById('txtbob').value == 'si' && resultado % 2 == 1 && document.getElementById('txtpop').value == 'no') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} bass</strong><br>`;
      }
      else if (document.getElementById('txtbob').value == 'no' && resultado % 2 == 1 && document.getElementById('txtpop').value == 'si') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} </strong><br>`;
        contImpar++;
      }
      else if (document.getElementById('txtbob').value == 'no' && resultado % 2 == 1 && document.getElementById('txtpop').value == 'no') {
        document.getElementById('respuesta').innerHTML += `<strong>${contTabla}x${contMulti}=${resultado} </strong><br>`;

      } else {
        document.getElementById('respuesta').innerHTML += `<strong> ERROR!! </strong>llenar correctamente los espacios<br>`;
      }
    }


    document.getElementById('respuesta').innerHTML += `<hr>`;

  }
  if (document.getElementById('txtpop').value == 'si') {
    document.getElementById('respuesta').innerHTML += `<strong> hay ${contImpar} Impares</strong><br>`;

    document.getElementById('respuesta').innerHTML += `<strong> hay ${contPares} pares </strong><br>`;
  } else {
    "";
  }

}








