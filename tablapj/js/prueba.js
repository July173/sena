function calcular(pnumhasta,ptabla){
    let numhasta = pnumhasta;
    let tabla = ptabla;
    let multiplicacion;
    let contador2=0;
    let contador1=0;
  
    for(let contador=1;contador<=numhasta;contador++){
        multiplicacion = contador * tabla;

console.log(tabla+"x"+contador+"="+multiplicacion);
   
    if(multiplicacion %2==0){
    contador2=contador2+multiplicacion;
   
    }
    else{
        contador1=contador1+multiplicacion;
       
    }
    
}
console.log("La suma de los pares es: "+contador2);
console.log("la suma de los impares es: "+contador1);
}
