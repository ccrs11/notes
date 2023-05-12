/* 
_______ _______ _______ _______ _______ _______ 
|\     /|\     /|\     /|\     /|\     /|\     /|
| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |
| | c | | | c | | | r | | | s | | | 1 | | | 1 | |
| +---+ | +---+ | +---+ | +---+ | +---+ | +---+ |
|/_____\|/_____\|/_____\|/_____\|/_____\|/_____\|


Company: ccrs11
Date: [2023-04-21]
Programmer: [Cristian Camilo Rojas Sepúlveda]
Description: [This code manages pending invoices .js]
*/

/* Las facturas se alamacenarán en un diccionario donde la clave de cada factura será el
    número de factura y el valor el coste de factura.
    El programa debe permitir ingresar facturas. A medida que se ingresan se
    muestran en un listado.
    El programa debe permitir pagar una factura existente y se elmina del diccionario.
    Despues de cada operación se debe mostrar un resumen con cantidad de facturas
    ingresdas, cantidad cobrada y cantidad pendiente de cobro.   
 */
const MAPA = new Map();
const btnAgregar=document.getElementById("agregarFactura");
btnAgregar.addEventListener("click",agregateFacture);
const btnEliminar=document.getElementById("eliminarFactura");
btnEliminar.addEventListener("click",deleteFacture);
let countI=0;
let countP=0;
let countV=0;
function agregateFacture(){
    const numeroFactura=document.getElementById("numeroFacturaInput").value;
    const valorFactura=document.getElementById("valorFacturaInput").value;
    MAPA.set(numeroFactura,valorFactura);
    enTabla(MAPA);
    console.log(MAPA);
    countI++
    countV = countI - countP;
    stadistics(countI,countP,countV)
}
function deleteFacture(){
    const numeroFactura=document.getElementById("numeroFacturaInput").value;
    MAPA.delete(numeroFactura);
    enTabla(MAPA);
    console.log(MAPA);
    countP++
    countV = countI - countP;
    stadistics(countI,countP,countV)
}
//coloco el numero Factura y el valorFactura dentro de las funciones porque no funciona por fuera.
function enTabla(MAPA){
    const tBody = document.getElementById("tbodyFill");
    tBody.innerHTML="";
    MAPA.forEach((key, value) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${value}</td><td>${key}</td>`;
        tBody.appendChild(fila);
      });
} 
function stadistics(countI,countP,countV){
    const arreglo=new Array();
    arreglo.push(countI,countP,countV);
        let tabla = document.getElementById("ingresarDatos2");
        tabla.innerHTML="";
            let row = document.createElement("tr");
            arreglo.forEach(function (c) {
                let cell = document.createElement("td");
                let contenido = document.createTextNode(c);
                cell.appendChild(contenido);
                row.appendChild(cell);
            });
            tabla.appendChild(row);;
}



