let cSalarioBruto = 0;
let cauxiTrans = 0;
let cBonifica = 0;
let cDesEPS = 0;
let cdesPEN = 0;
let cSalarioNeto = 0;
let auxitrans = 0;
function darValor() {
    const cedula = Number(document.getElementById("cedula").value);
    dentroTabla = "";
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const salarioMinimo = 1160000;
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

    if (salarioBruto<salarioMinimo*1.5){
        auxitrans=400000;
    }else{
        auxitrans=0;
    }

    descuEps = salarioBruto * 0.04;
    descuPEN = salarioBruto * 0.04;

    salario= salarioBruto + auxitrans- descuEps - descuPEN;
    const user = [cedula,nombre,categoria,salarioBruto,auxitrans,bonificacion,descuEps,descuPEN,salario];
    datosUser.push(user);

    dentroTabla += `<tr><td>${cedula}</td><td>${nombre}</td><td>${categoria}</td><td>${salarioBruto}</td><td>${auxitrans}</td><td>${bonificacion}</td><td>${descuEps}</td><td>${descuPEN}</td><td>${salario}</td></tr>`;

    cSalarioBruto = salarioBruto + cSalarioBruto;
    cBonifica = bonificacion + cBonifica;
    cDesEPS = descuEps + cDesEPS;
    cdesPEN = descuPEN + cdesPEN;
    cSalarioNeto = salario + cSalarioNeto;
    cauxiTrans+=auxitrans;
    document.getElementById('ingresarDatos').innerHTML += dentroTabla;

    document.getElementById('ingresarDos').innerHTML = `<tr><td></td><td></td><td></td><td>${cSalarioBruto}</td><td>${cauxiTrans}</td><td>${cBonifica}</td><td>${cDesEPS}</td><td>${cdesPEN}</td><td>${cSalarioNeto}</td></tr>`;
    return dentroTabla;
}
 const datosUser=[];
 console.log(datosUser);