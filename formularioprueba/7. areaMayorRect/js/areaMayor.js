/**
 * función saludo
 * auto: JR
 * fecha: 20 de junio de 2024
 */
document.getElementById('txtSaludo').value;
document.getElementById('saludo').innerHTML = `<strong>${saludar}</strong>`;


function generarCampos() {
    const rectangulos = document.getElementById('CantRect').value;
    const campbase = document.getElementById('base');
    const campAltu = document.getElementById('altura');

    campAltu.innerHTML = '';
    campbase.innerHTML = '';

    for (let contador = 0; contador < rectangulos; contador++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'bases';

        campbase.appendChild(input);
    }
    for (let contador = 0; contador < rectangulos; contador++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'alturas';

        campAltu.appendChild(input);
    }

}

function calcularAreas(pBase, pAltura) {
    let base = pBase;
    let altura = pAltura;
    let areaRectan;
    areaRectan = altura * base;
    return areaRectan;
}

function mayor() {
    const alturasM = document.querySelectorAll(' .alturas');
    const basesM = document.querySelectorAll(' .bases');
    let mayor= null;
    alturasM.forEach((altura2, indexAlturaM) => {
        const alturaMa= parseFloat( altura2.value);
        basesM.forEach((base2, indexBaseM) => {
            const baseMa = parseFloat(base2.value);
            if (baseMa,alturaMa) {       
                if(indexAlturaM == indexBaseM){
                    const areaMa = calcularAreas(baseMa, alturaMa);
                
            

             if(!isNaN(areaMa)){
                if(mayor===null||areaMa>mayor){
                    mayor=areaMa;
                }
            }}
    }});
    
    });
    if(mayor!==null){
        document.getElementById('mayor').innerHTML=`<strong>El area mayor  es: ${mayor}</strong>`;

    }

}


function area() {
    const alturas = document.querySelectorAll(' .alturas');
    const bases = document.querySelectorAll(' .bases');
    const mostrarAreas = document.getElementById('area');

    mostrarAreas.innerHTML = '';

    alturas.forEach((altura1, indexAltura) => {
        const altura = altura1.value;
        bases.forEach((base1, indexBase) => {
            const base = base1.value;
            if (base,altura) {       
                if(indexAltura == indexBase){
                    const area = calcularAreas(base, altura);
                    document.getElementById('area').innerHTML += `<strong> Rectangulo ${indexAltura + 1}: ${area}</strong></br>`;
                }
            }
        });
    });

}