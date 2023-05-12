const articulos = new Map([[1,"Lapiz"],[2,"Cuadernos"],[3,"Borrador"],[4,"Calculadora"],[5,"Escuadra"]]);
const valores = new Map([[1,2500],[2,3800],[3,1200],[4,35000],[5,3700]]);
const psuheador= new Array();
let cont = "";
let cont2= "";
console.log(articulos.get(5));
const btnAgregar=document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",calcularProductos);
const btnEliminar=document.getElementById("calcularTotal");
let sum = 0;
function calcularProductos(){
    const key=Number(document.getElementById("codeInput").value);
    const cantidad=Number(document.getElementById("countInput").value);
    let nombre=articulos.get(key);
    let valorUnitario=valores.get(key);
    let valorTotal=valorUnitario*cantidad;
    psuheador.push(nombre,cantidad,valorUnitario,valorTotal);
    cont += `<tr><td>${nombre}</td><td>${cantidad}</td><td>${valorUnitario}</td><td>${valorTotal}</td></tr>`
    document.getElementById("tbodyFill").innerHTML = cont;
    sum += psuheador[3];
    cont2 = `<tr><td></td><td></td><td></td><td>${sum}</td></tr>`;
    document.getElementById("resultado").innerHTML= cont2;
}