class Producto{
    constructor(codigo,precio,cantBodega,cantMin){
        this._codigo=codigo;
        this._precio=precio;
        this._cantBodega=cantBodega;
        this._cantMin=cantMin;
    }
    set codigo(codigo){
        this._codigo=codigo;
    }
    set precio(precio){
        this._precio=precio;
    }
    set cantBodega(cantBodega){
        this._cantBodega=cantBodega;
    }
    set canMin(cantMin){
        this._cantMin=cantMin;
    }
    get codigo(){
        return this._codigo;
    }
    get precio(){
        return this._precio;
    }
    get cantBodega(){
        return this._cantBodega;
    }
    get canMin(){
        return this._cantMin;
        
    }
    solicitarPedido(){
        if(this._cantBodega>this._cantMin){
        return true;
        }else{
            return false;
        }
    }
}

vector=[]
//
const btnAgregar=document.getElementById("agregarProducto");
btnAgregar.addEventListener("click",calcularBodega);
//empieza funcion click
function calcularBodega(){
cod=Number(document.getElementById("codigoHTML").value);
pre=Number(document.getElementById("precioHTML").value);
canB=Number(document.getElementById("cantidadBodegaHTML").value);
canM=Number(document.getElementById("cantidadMinimaHTML").value);
const producto1= new Producto(cod,pre,canB,canM);
const bandera = producto1.solicitarPedido();
    if (bandera===true){
        //Crear el li
        const li=document.createElement("li");
        //escoge la clase según corresponda, en este caso cambiar la clase
        document.getElementById("MyElement").className += " bg-danger"; 
        //Agregar con la propiedad get el nombre
        console.log()
    }
    else{
        //crear en el documentp una tarjeta con fondo rosado
    }
vector.push(producto1);
console.log("entra");
console.log(vector);
}
//termina función click

//Hallar el mínimo
//vector.reduce() y pintar el HTML ¿con template?

