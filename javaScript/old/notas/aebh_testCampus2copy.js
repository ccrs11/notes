//Declarar variables que son globales
const salarioMinimo = 1_160_000;
const auxiTransporte = 400_000;
let vNomina = 0;
let vPromedio=0;
let matriz = new Array();
//Funcion de inicio o lanzar todo
function lanzar() {
    const cedula = Number(document.getElementById("cedula").value);
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    matriz.push(byCategoria(cedula, nombre, categoria));
    document.getElementById("ingresarDatos").textContent="";
    createTable(matriz);
    document.getElementById("ingresarDatos2").textContent=""
    createTable2(tabla2(matriz));
}


//La categoria calcula el valor del salario bruto y la bonificación
function byCategoria(cedula, nombre, categoria) {
    let byClient = new Array();
    if (categoria === "Auxiliar A") {
        salarioBruto = salarioMinimo * 1;
        bonificacion = 100000;
    } else if (categoria === "Auxiliar B") {
        salarioBruto = salarioMinimo * 1.2;
        bonificacion = 100000;
    } else if (categoria === "Técnico A") {
        salarioBruto = salarioMinimo * 1.5;
        bonificacion = 150000;
    } else if (categoria === "Técnico B") {
        salarioBruto = salarioMinimo * 2;
        bonificacion = 150000;
    } else if (categoria === "Profesional A") {
        salarioBruto = salarioMinimo * 2.5;
        bonificacion = 200000;
    } else if (categoria === "Profesional B") {
        salarioBruto = salarioMinimo * 3;
        bonificacion = 250000;
    } else if (categoria === "Director A") {
        salarioBruto = salarioMinimo * 4;
        bonificacion = 500000;
    } else if (categoria === "Director B") {
        salarioBruto = salarioMinimo * 4.5;
        bonificacion = 1000000;
    } else if (categoria === "Gerente Departamento") {
        salarioBruto = salarioMinimo * 6;
        bonificacion = 2000000;
    } else if (categoria === "Gerente General") {
        salarioBruto = salarioMinimo * 10;
        bonificacion = 5000000;
    } else {
        alert("La categoria seleccionada no es correcta")
    }
    //Calcular el valor del auxilio de transporte
    function calAuxiTrans(salarioBruto, auxiTransporte) {
        let auxiTrans = 0;
        if (salarioBruto < salarioMinimo * 1.5) {
            auxiTrans = auxiTransporte;
        } else {
            auxiTrans = 0;
        }
        return auxiTrans;
    }
    //Fucncion descuento por eps
    let calDesEps = (e) => { return e * 0.04; };
    //function calc descount for pension
    let calDesPen = (e) => { return e * 0.04; };
    //calcular salario
    let calSalario = (salarioBruto, bonificacion, auxiTrans, descEps, descPen) => {
        salarioNeto = salarioBruto + bonificacion + auxiTrans - descEps - descPen;
        return salarioNeto;
    }
    //colocar en un array
    byClient.push(cedula, nombre, categoria, salarioBruto, calAuxiTrans(salarioBruto, auxiTransporte), bonificacion, calDesEps(salarioBruto), calDesPen(salarioBruto), calSalario(salarioBruto, bonificacion, calAuxiTrans(salarioBruto, auxiTransporte), calDesEps(salarioBruto), calDesPen(salarioBruto)));
    return byClient;
}

function createTable() {
    let tabla = document.getElementById("ingresarDatos");
    matriz.forEach(function (f) {
        let row = document.createElement("tr");
        f.forEach(function (c) {
            let cell = document.createElement("td");
            let contenido = document.createTextNode(c);
            cell.appendChild(contenido);
            row.appendChild(cell);
        });
        tabla.appendChild(row);
    });
}

//necesita estar definida matriz
function tabla2(matriz){
    let byAll = new Array();
    function calValorNomina(matriz) {
        let col = 8;
        let vNomina = matriz.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue[col];
        }, 0);
        return vNomina;
    }
    function empleadoPobre(matriz){
            let col=8;
            let min=matriz.reduce(function(accumulator,currentValue){
            return Math.min(accumulator,currentValue[col]);},Infinity);
            return min;
            
    }
    function empleadoRico(matriz){
        let col=8;
        let max=matriz.reduce(function(accumulator,currentValue){
        return Math.max(accumulator,currentValue[col]);},-Infinity);
        return max;
    }

    function canEmpleados(matriz){
        let cantidadEmpleados=matriz.length;
        return cantidadEmpleados;
    }
    function calPromedio(){
        vPromedio=calValorNomina(matriz)/canEmpleados(matriz);
        return vPromedio;
    }
    byAll.push(canEmpleados(matriz),empleadoPobre(matriz),calPromedio(),empleadoRico(matriz),calValorNomina(matriz));
return byAll;
}

// 

function createTable2(byAll) {
    let tabla = document.getElementById("ingresarDatos2");
        let row = document.createElement("tr");
        byAll.forEach(function (c) {
            let cell = document.createElement("td");
            let contenido = document.createTextNode(c);
            cell.appendChild(contenido);
            row.appendChild(cell);
        });
        tabla.appendChild(row);;
}

//function makeRow(){
    //     const rowTable1=document.getElementById("trBeforeTemplate");
    //     rowTable1.textContent="";
    //     const template =document.querySelector(template).content;    
    //     byAll.forEach((item)=>{
    //         template.querySelector("td").textContent=item;
    //         const clones= template.cloneNode(true);
    //         fragment.appendChild(clones);
    //     })
    //     rowTable1.appendChild(fragment);
    // }

    //funcion que halle el numero de empleados recorriendo la matriz hacia abajo
    
    //funcion que halle en empleado que menos gana. Esto se hace recorriendo el arreglo por columnas en la posición del index 8, devolviendo el valor menor y el nombre del usuario 
    //let min=matriz.reduce(function(accumulator,currentValue){
    //    return Math.min(accumulator,currentValue)
    //},Infinity);
    //console.log(min);

    //funcion que halle el empleado que más gana.  Esto se hace recorriendo el arreglo por columnas en la posición del index 8, devolviendo el valor mayor y el nombre del usuario 
   
    //console.log(sum);
    //let max=matriz.reduce(function(accumulator,currentValue){
    //    return Math.max(accumulator,currentValue)
    //},-Infinity);
    //console.log(max);

    //funcion que halle el número total de nómina esto se hace sumando los valores de las casilla con index 8.
    //let sum = matriz.reduce(function(accumulator,currentValue){
    //return accumulator+currentValue;
    //})

//funcion que halle el promedio de los salarios sumando todas las columnas del arreglo y luego dividiendo en cantidad de empleados
    //let promedio=sum/cantidadEmpleados;
