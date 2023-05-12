class Producto {
    //static argument created to determinate the quantitive of products 
    static cantidadPro = 0;
    static solicitarPed=0;
    #codigo;
    #descripcion;
    #precioCompra;
    #precioVenta;
    #cantidadBodega;
    #cantidadMinimaBodega;
    #cantidadMaximaInventario;
    #porcentajeDescuento;
    //construcor needed to create an instance bur we don't create any instance of products
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento) {
        this.#codigo = codigo;
        this.#descripcion = descripcion;
        this.#precioCompra = precioCompra;
        this.#precioVenta = precioVenta;
        this.#cantidadBodega = cantidadBodega;
        this.#cantidadMinimaBodega = cantidadMinimaBodega;
        this.#cantidadMaximaInventario = cantidadMaximaInventario;
        this.#porcentajeDescuento = porcentajeDescuento;
        //increase the amount of products every time the cycle pass
        ++Producto.cantidadPro;
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
        return this.#cantidadBodega <= this.#cantidadMinimaBodega;
    }
    calcularValorPagar(unidadesCompra) {
        return this.#precioCompra * unidadesCompra;
    }
    mostrar() {
    }

}
//Create class PrendaVestir that is a subClase of Product
class PrendaVestir extends Producto {
    static cantidadPreV = 0;
    #talla;
    #planchado;
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento, talla, planchado) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinimaBodega, cantidadMaximaInventario, porcentajeDescuento);
        this.#talla = talla;
        this.#planchado = planchado;
        ++PrendaVestir.cantidadPreV;
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
    mostrar() {
        const putInfo=document.getElementById("putInfo");
        putInfo.innerHTML =`<div id="tarjeta" class="card text-black mb-3" style="max-width: 18rem;">
                        <div class="card-header">Tarjeta de producto</div>
                        <div class="card-body">
                        <h5 class="card-title">${this.descripcion}</h5>
                        <p class="card-text">codigo --> ${this.codigo}</p>
                        <p class="card-text">precioCompra --> ${this.precioCompra}</p>
                        <p class="card-text">precioVenta --> ${this.precioVenta}</p>
                        <p class="card-text">cantidadBodega --> ${this.cantidadBodega}</p>
                        <p class="card-text">cantidadMinimaBodega --> ${this.cantidadMinimaBodega}</p>
                        <p class="card-text">cantidadMaximaInventario --> ${this.cantidadMaximaInventario}</p>
                        <p class="card-text">porcentajeDescuento --> ${this.porcentajeDescuento}</p>
                        <p class="card-text">talla --> ${this.#talla}</p>
                        <p class="card-text">talla --> ${this.#planchado}</p>
                        </div>
                        </div>`
        const targ=document.getElementById("tarjeta");
        console.log(this.cantidadBodega)
        if (super.solicitarPedido()===true){
            console.log("acaNunca");
            targ.classList.remove("bg-light");
            targ.classList.add("bg-secondary");
            ++Producto.solicitarPed;
        }else{
            targ.classList.remove("bg-secondary");
            targ.classList.add("bg-light");
            
            console.log("acaSiempre");
        } ;
    }

}