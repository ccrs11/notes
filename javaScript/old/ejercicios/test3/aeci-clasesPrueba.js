class Producto {
    static cantidadPro = 0;
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantidadBodega;
    #cantidadMinimaBodega;
    #cantidadMaximaInventario;
    #porcentajeDescuento;

    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#precioCompra = precioCompra;
        this.#precioVenta = precioVenta;
        this.#cantidadBodega = cantidadBodega;
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
        this.#porcentajeDescuento = porcentajeDescuento;
        ++Cuenta.cantidadPro;
    }
    //Space for setters and getters
    set codigo(codigo) {
        this.#codigo = codigo;
    }
    get codigo() {
        return this.#codigo;
    }
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    get descripcion() {
        return this.#descripcion;
    }
    set precioCompra(precioCompra) {
        this.#precioCompra = precioCompra;
    }
    get precioCompra() {
        return this.#precioCompra;
    }
    set precioVenta(precioVenta) {
        this.#precioVenta = precioVenta;
    }
    get precioVenta() {
        return this.#precioVenta;
    }
    set cantidadBodega(cantidadBodega) {
        this.#cantidadBodega = cantidadBodega;
    }
    get cantidadBodega() {
        return this.#cantidadBodega;
    }
    set cantidadMinimaBodega(cantidadMinimaBodega) {
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
    }
    get cantidadMinimaBodega() {
        return this.#cantidadMinimaBodega;
    }
    set cantidadMaximaInventario(cantidadMaximaInventario) {
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
    }
    get cantidadMaximaInventario() {
        return this.#cantidadMaximaInventario;
    }
    set porcentajeDescuento(porcentajeDescuento) {
        this.#porcentajeDescuento = porcentajeDescuento;
    }
    get porcentajeDescuento() {
        return this.#porcentajeDescuento;
    }

    //methods
    solicitarPedido() {
        if (this.#cantidadBodega >= this.#cantidadMinimaBodega) {
            return true
        } return false
    }
    calcularValorPagar(unidadesCompra) {
        return this.#precioCompra * unidadesCompra;
    }
    /*mostrar(){
        paraDespues: devuelva una cadena HTML con Bootstrap descriptiva con la información del
producto. El fondo de la tarjeta es gris si el producto requiere hacer pedido al
proveedor de lo contrario el fondo es blanco.
    }*/

}

class PrendaVestir extends Producto {
    static cantidadPreV = 0;
    #talla;
    #planchado;
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento, talla, planchado) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento);
        this.#talla = talla;
        this.#planchado = planchado;
        cantidadPreV++;
    }
    //setters and getters
    set talla(talla) {
        this.#talla = talla;
    }
    get talla() {
        return this.#talla;
    }
    set planchado(planchado) {
        this.#planchado = planchado;
    }
    get planchado() {
        return this.#planchado;
    }
    /*mostrar(){
    paraDespues: devuelva una cadena HTML con Bootstrap descriptiva con la información del
producto. El fondo de la tarjeta es gris si el producto requiere hacer pedido al
proveedor de lo contrario el fondo es blanco.
}*/

}
class Calzado extends Producto {
    #talla
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento, talla) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento);
        this.#talla = talla;
    }
    //setters and getters
    set talla(talla) {
        this.#talla = talla;
    }
    get talla() {
        return this.#talla;
    }
    /*mostrar(){
    paraDespues: devuelva una cadena HTML con Bootstrap descriptiva con la información del
producto. El fondo de la tarjeta es gris si el producto requiere hacer pedido al
proveedor de lo contrario el fondo es blanco.
}*/
}
//la función mostrar debe almacenar todo en un arreglo para recorrer el arreglo e ir adicionando cada cosa
//cuando le de en agregar, esa información debe ser agregada en el array, puede ser un map

btnAnadir=document.getElementById("btnAnadir");
btnAnadir=addEventListener('click',tests);

//cambiar test por mostrar
function tests(){ 
/* codigo=document.getElementById("codigo");
descripcion=document.getElementById("descripcion");
precioCompra=document.getElementById("precioCompra");
precioVenta=document.getElementById("precioVenta");
cantidadBodega=document.getElementById("cantidadBodega");
cantidadMinimaBodega=document.getElementById("cantidadMinimaBodega");
cantidadMaximaInventario=document.getElementById("cantidadMaximaInventario");
porcentajeDescuento=document.getElementById("porcentajeDescuento"); */
traerMcodigo=document.getElementById("codigo").value;
traerMdescripcion=document.getElementById("descripcion").value;
traerMprecioCompra=document.getElementById("precioCompra").value;
traerMprecioVenta=document.getElementById("precioVenta").value;
traerMcantidadBodega=document.getElementById("cantidadBodega").value;
traerMcantidadMinimaBodega=document.getElementById("cantidadMinimaBodega").value;
traerMcantidadMaximaInventario=document.getElementById("cantidadMaximaInventario").value;
traerMporcentajeDescuento=document.getElementById("porcentajeDescuento").value;
traerMcategoria=document.getElementById("categoria").value;
traerPtalla=document.getElementById("talla");
traerPplanchado=document.getElementById("planchados")
if (traerMcategoria==="vestuario"){
    traerPtalla.style.display="block";
    traerPplanchado.style.display="block";
}else if (traerMcategoria==="calzado"){
    traerPtalla.style.display="block";
}

const productoo = new Map([["codigo",traerMcodigo],
    ["descripcion",traerMdescripcion],
    ["precioCompra",traerMprecioCompra],
    ["precioVenta",traerMprecioVenta],
    ["cantidadBodega",traerMcantidadBodega],
    ["cantidadMinimaBodega",traerMcantidadMinimaBodega],
    ["cantidadMaximaInventario",traerMcantidadMaximaInventario],
    ["porcentajeDescuento",traerMporcentajeDescuento],
    ["categoria",traerMcategoria]
]);

const tBody1=document.getElementById("putInfo");
tBody1.innerHTML=`<tr><td>${traerMcodigo}</td><td>${traerMdescripcion}</td><td>${traerMprecioCompra}</td><td>${traerMprecioVenta}</td><td>${traerMcantidadBodega}</td><td>${traerMcantidadMinimaBodega}</td><td>${traerMcantidadMaximaInventario}</td><td>${traerMcantidadMaximaInventario}</td><td>${traerMcategoria}</td></tr>`
/*     sum += psuheador[3];
    cont2 = `<tr><td></td><td></td><td></td><td>${sum}</td></tr>`;
console.log(productoo); */
}