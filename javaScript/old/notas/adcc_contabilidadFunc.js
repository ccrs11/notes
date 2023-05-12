const auxilioTransporte=144000;
const salarioMinimo= 1160000;
const valorHora= 4833;

function calcularSalBruto(horasTra, valorHora){
salarioBruto=horasTra*valorHora;
}

// const calcularEPS=(salarioBruto)=>{
//     desEPS=0.04*salarioBruto;
//     return desEPS;
// }

function calcularEPS (salarioBruto){
    desEPS=0.04*salarioBruto;
    return desEPS;
}
function calcularPension(salarioBruto){
desPension=0.04*salarioBruto;
return desPension
}
function calcularAuxTrans(salarioBruto){
    if (salarioBruto>=salarioMinimo){
        aumentoTransporte= auxilioTransporte;
    }else{
        aumentoTransporte=0;
    }
    return aumentoTransporte
}
function calcularSalNeto(salarioBruto,desEPS,desPension,aumentoTransporte){
    salarioNeto=salarioBruto-desEPS-desPension+aumentoTransporte;
    return salarioNeto;
}
let dentroTabla="";
let cedula=Number(prompt("...Ingrese la cedula del empleado...\n"));
while(cedula !== 0){ 
    let nombre=String(prompt("...Digite el nombre del empleado...\n"));
    let horasTra=Number(prompt("...Ingrese las horas trabajadas por el empleado...\n"));
    calcularSalBruto(horasTra,valorHora);
    calcularEPS(salarioBruto);
    calcularPension(salarioBruto);
    calcularAuxTrans(salarioBruto);
    calcularSalNeto(salarioBruto,desEPS,desPension,aumentoTransporte);
    dentroTabla += `<tr><td>${cedula}</td><td>${nombre}</td><td>${horasTra}</td><td>${valorHora}</td><td>${salarioBruto}</td><td>${desEPS}</td><td>${desPension}</td><td>${aumentoTransporte}</td><td>${salarioNeto}</td></tr>`;
    document.getElementById('ingresarDatos').innerHTML = dentroTabla;
    cedula=Number(prompt("...Ingrese la cedula del empleado...\n"));
}



