/**
 * función saludo
 * auto: JR
 * fecha: 20 de junio de 2024
 */



function salario(){
    var vaDias=document.getElementById('txtPagoDia').value;
    var nDias=document.getElementById('txtDias').value;
    var resultado;
    resultado=vaDias*nDias;
    document.getElementById('respuesta').innerHTML=`<strong> Salario =${resultado}</strong>`;
    return resultado;
}

function salud(){
    var saludPersona;
    var salarioPersona= salario();
    saludPersona=salarioPersona*0.12;
    document.getElementById('respuesta').innerHTML=`<strong> Salud =${saludPersona}</strong>`;
    return saludPersona;
}
 
function pension(){
    let pensionPersona;
    let salarioPersona= salario();
    pensionPersona=salarioPersona*0.16;
    document.getElementById('respuesta').innerHTML=`<strong> Pension =${pensionPersona}</strong>`;
    return pensionPersona;
}
function arl(){
    let arlPersona;
    let salarioPersona= salario();
    arlPersona=salarioPersona*0.052;
    document.getElementById('respuesta').innerHTML=`<strong> Arl =${arlPersona}</strong>`;
    return arlPersona;
}

function subTrans(){
    let salarioPersona= salario();
    let salarioMinimo= 1300000;
    let subsidioT;
    
    if(salarioPersona<=2*salarioMinimo){
        subsidioT=114000;
    }
    else{
        subsidioT=0;
    }
    document.getElementById('respuesta').innerHTML=`<strong> Subsidio de transporte =${subsidioT}</strong>`;

    return subsidioT;

}
function retencion(){
    let salarioPersona= salario();
    let salarioMinimo= 1300000;
    let retencionPersona;
    
    if(salarioPersona>=4*salarioMinimo){
        retencionPersona=salarioMinimo*0.04;
    }
    else{
        retencionPersona=0;
    }
    document.getElementById('respuesta').innerHTML=`<strong> Retencion =${retencionPersona}</strong>`;

    return retencionPersona;

}

const deducibles=function(pvaDias,pnDias){
    let descuento;
    let dsalud= salud(pvaDias,pnDias);
    let dpension=pension(pvaDias,pnDias);
    let darl= arl(pvaDias,pnDias);
    let dretencion= retencion(pvaDias,pnDias);
    descuento= dsalud+dpension+darl+dretencion;
    return descuento;

}

function pagoTotal(){
    let salarioPersona=salario();
    let deducible=deducibles();
    let subsidioTr= subTrans();
    let pago;
    pago= (salarioPersona+subsidioTr)-deducible;
    document.getElementById('respuesta').innerHTML=`<strong> Pago total =${pago}</strong>`;

}