/* mapEmpleado={
    cedula:{
        nombre:xxx
        categoria:xxx
        abrcategoria:xxx
        ...
    }
} */

const vEmpleados=[];
const mapTotalNomina=new Map();
const mapEstadistica=new Map();
const salarioMinimo=1_600_000;

function agregarEmpleadoNomina(e){
    //e.preventDefaunlt();

    if(capturarInformacion()===false) return;

}

function capturarInformacion(){
    //captura información del diccionario y la guarda en el vector
    const mapEmpleado=new Map();

    const cedula = document.getElementById("cedula");
    if(cedula.value.length<=0){
        alert("valor no valido");
        cedula.focus();
        return false
    }

    const nombre=document.getElementById("nombre");
    const ctrlcategoria = document.getElementById("categoria");
    const categoria=ctrlcategoria.options[ctrlcategoria.selectedIndex].text;
    const abrCategoria=ctrlcategoria.value;

    const datEmpl = new Map([
        ["nombre",nombre],
        ["categoria",categoria],
        ["abrcategoria",abrCategoria]
    ])

    mapEmpleado.set(cedula,datEmpl);
    vEmpleados.push(mapEmpleado);
    console.log(vEmpleados);

    return true;

}