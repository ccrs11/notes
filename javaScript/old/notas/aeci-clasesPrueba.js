//Create the class Producto
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
        if (this.#cantidadBodega <= this.#cantidadMinimaBodega) {
            return true;
        } return false;
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
                        </div>
                        </div>
                        <hr>`
        const targ=document.getElementById("tarjeta");
        if (super.solicitarPedido()===true){
            targ.classList.remove("bg-white");
            targ.classList.add("bg-secondary");
            console.log("acaSiempre");
            ++Producto.solicitarPed;
        }else{
            targ.classList.remove("bg-secondary");
            targ.classList.add("bg-white");
            console.log("acaNunca");
        } ;
    }
}
//la función mostrar debe almacenar todo en un arreglo para recorrer el arreglo e ir adicionando cada cosa
//cuando le de en agregar, esa información debe ser agregada en el array, puede ser un map

const traerPtalla = document.getElementById("tallas");
const traerPplanchado = document.getElementById("planchados");
const traerMcategoria = document.getElementById("categoria");

// Create a function to handle the changes
function handleCategoriaChange() {
  if (traerMcategoria.value === "vestuario") {
    traerPtalla.style.display = "block";
    traerPtalla.type = "text";
    traerPplanchado.style.display = "block";
  } else if (traerMcategoria.value === "calzado") {
    traerPtalla.style.display = "block";
    traerPplanchado.style.display = "none";
    traerPtalla.type = "number";
  } else {
    traerPtalla.style.display = "none";
    traerPplanchado.style.display = "none";
  }
}

//arreglo donde se almacena todo
const todo = Array();

// Call the function when the value of the select element changes
traerMcategoria.addEventListener("change", handleCategoriaChange);

const btnAnadir = document.getElementById("btnAnadir");
btnAnadir.addEventListener('click', anadir);
//cambiar test por mostrar

//function to determinate the maxValue
function encontrarMayorDato(todo) {
    let mayorValorBodega = todo[0].get("cantidadBodega");
    let posicion = 0;
    for (let f = 1; f < todo.length; f++) {
      const cantidadBodega = todo[f].get("cantidadBodega");
      if (cantidadBodega > mayorValorBodega) {
        mayorValorBodega = cantidadBodega;
        posicion = f;
      }
    } 
    return todo[posicion];
  }

  function storages(calzado){ //stores items in the localStorage
/*     var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
    } */

    localStorage.setItem("Hi",JSON.stringify(calzado));  
    //converting object to string
}


function anadir() {
    card="";
    traerMcodigo = document.getElementById("codigo").value;
    traerMdescripcion = document.getElementById("descripcion").value;
    traerMprecioCompra = document.getElementById("precioCompra").value;
    traerMprecioVenta = document.getElementById("precioVenta").value;
    traerMcantidadBodega = document.getElementById("cantidadBodega").value;
    traerMcantidadMinimaBodega = document.getElementById("cantidadMinimaBodega").value;
    traerMcantidadMaximaInventario = document.getElementById("cantidadMaximaInventario").value;
    //traerMcategoria = document.getElementById("categoria").value;
    traerMporcentajeDescuento = document.getElementById("porcentajeDescuento").value;
    traerMtalla = document.getElementById("talla").value;
    traerMplanchado = document.getElementById("planchado").value;
    if (traerMcategoria.value === "vestuario") {
        prenda = new PrendaVestir (traerMcodigo, traerMdescripcion, traerMprecioCompra, traerMprecioVenta, traerMcantidadBodega, traerMcantidadMinimaBodega, traerMcantidadMaximaInventario, traerMporcentajeDescuento, traerMtalla, traerMplanchado);
        prenda.mostrar();
    } else if (traerMcategoria.value === "calzado") {
        calzado = new Calzado (traerMcodigo, traerMdescripcion, traerMprecioCompra, traerMprecioVenta, traerMcantidadBodega, traerMcantidadMinimaBodega, traerMcantidadMaximaInventario, traerMporcentajeDescuento, traerMtalla);
        calzado.mostrar();
        console.log(Object.keys(calzado));
    }

    //stadistics 
    document.getElementById("cantidadProd").textContent = `${Producto.cantidadPro}`;
    document.getElementById("cantidadPrenV").textContent = `${PrendaVestir.cantidadPreV}`;
    document.getElementById("solicitarPed").textContent =  `${Producto.solicitarPed}`;

    const productoo = new Map([["codigo", traerMcodigo],
    ["descripcion", traerMdescripcion],
    ["precioCompra", traerMprecioCompra],
    ["precioVenta", traerMprecioVenta],
    ["cantidadBodega", traerMcantidadBodega],
    ["cantidadMinimaBodega", traerMcantidadMinimaBodega],
    ["cantidadMaximaInventario", traerMcantidadMaximaInventario],
    ["porcentajeDescuento", traerMporcentajeDescuento],
    ["categoria", traerMcategoria.value],
    ]);

    todo.push(productoo); //Colocar lo que está dentro de producto en el array Todo
    //console.log(Array.isArray(todo));
    console.log(todo);
    const productooMD = encontrarMayorDato(todo);
    //console.log(productooMD); //correr la función encontrarMayorDato y determinar el map que tenga la mayor cantidad
    document.getElementById("mayorcodigo").textContent =  `${productooMD.get("codigo")}`;
    document.getElementById("mayordescripcion").textContent =  `${productooMD.get("descripcion")}`;
    console.log("el calzado con mayor cantidad de unidades es: ", productooMD.get("codigo"));
}


//Agregate local storage and get stadistics
//create something that is modular