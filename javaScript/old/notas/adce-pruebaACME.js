let dentroTabla="";
let dentroTabla2="";
let menor=+Infinity;
let almanombresEmpr="";
let almaProducto="";
let almaValor2022="";
let almaValor2023="";
diferecia=0;

let nombresEmpr=prompt("...Ingrese la nombresEmpr del empleado...\n");
while(nombresEmpr !== "off"){ 
    let producto=prompt("...Digite el producto...\n");
    let valor2022=Number(prompt("...Ingrese el valor del producto en el 2022...\n"));
    let valor2023=Number(prompt("...Ingrese el valor del producto en el 2023...\n"));

    diferencia=valor2023-valor2022;
    if (diferecia<menor){
        menor=diferencia;
        diferenciaI=valor2023/valor2022;
        almanombresEmpr=nombresEmpr;
        almaProducto=producto;
        almaValor2022=valor2022;
        almaValor2023=valor2023;
    }
    dentroTabla += `<tr><td>${nombresEmpr}</td><td>${producto}</td><td>${valor2022}</td><td>${valor2023}</td></tr>`;
    document.getElementById('ingresarDatos').innerHTML = dentroTabla;
    nombresEmpr=prompt("...Ingrese el nombre del proveedor...\n");
    
}
dentroTabla2 += `<tr><td>${almanombresEmpr}</td><td>${almaProducto}</td><td>${almaValor2022}</td><td>${almaValor2023}</td><td>${diferenciaI.toFixed(2)}</td></tr>`;
document.getElementById('ingresarDatos2').innerHTML = dentroTabla2;