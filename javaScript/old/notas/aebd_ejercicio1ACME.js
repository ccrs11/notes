function darValor() {
    const cedula = Number(document.getElementById("cedula").value);
    dentroTabla = "";
    cSalarioBruto=0;
    cauxiTrans=0;
    cBonifica=0;
    cDesEPS=0;
    cdesPEN=0;
    cSalarioNeto=0;
    while (cedula !== "fin") {
        const nombre = document.getElementById("nombre").value;
        const categoria = document.getElementById("categoria").value;
        const salarioMinimo = 1160000;
        const auxitrans = 400000;
        if (categoria==="Auxiliar A"){
            salarioBruto = salarioMinimo * 1;
            bonificacion=100000;
        }else if(categoria==="Auxiliar B"){
            salarioBruto=salarioMinimo*1.2;
            bonificacion=150000;
        }else if(categoria==="Técnico A"){
            salarioBruto=salarioMinimo*1.5;
            bonificacion=100000;
        }else if(categoria==="Técnico B"){
            salarioBruto=salarioMinimo*2;
            bonificacion=100000;
        }else if(categoria==="Profesional A"){
            salarioBruto=salarioMinimo*2.5;
            bonificacion=100000;
        }else if(categoria==="Profesional B"){
            salarioBruto=salarioMinimo*3;
            bonificacion=100000;
        }else if(categoria==="Director A"){
            salarioBruto=salarioMinimo*4;
            bonificacion=100000;
        }else if(categoria==="Director B"){
            salarioBruto=salarioMinimo*4.5;
            bonificacion=100000;
        }else if(categoria==="Gerente Departamento"){
            salarioBruto=salarioMinimo*6;
            bonificacion=100000;
        }else if(categoria==="Gerente General"){
            salarioBruto=salarioMinimo*10;
            bonificacion=100000;
        }else {
            alert("La categoria seleccionada no es correcta")
        }


        descuEps = salarioBruto * 0.04;
        descuPEN = salarioBruto * 0.04;
        if (salarioBruto < salarioMinimo*1.5) {
            salario = salarioBruto - descuEps - descuPEN + auxitrans;
            conauxilio = auxitrans;

            dentroTabla += `<tr><td>${cedula}</td><td>${nombre}</td><td>${categoria}</td><td>${salarioBruto}</td><td>${auxitrans}</td><td>${bonificacion}</td><td>${descuEps}</td><td>${descuPEN}</td><td>${salario}</td></tr>`;

        } else {
            salario = salarioBruto - descuEps - descuPEN;
            conauxilio = auxitrans;
            dentroTabla += `<tr><td>${cedula}</td><td>${nombre}</td><td>${categoria}</td><td>${salarioBruto}</td><td>${auxitrans}</td><td>${bonificacion}</td><td>${descuEps}</td><td>${descuPEN}</td><td>${salario}</td></tr>`;
        }
        cSalarioBruto=salarioBruto+cSalarioBruto;
        cBonifica=bonificacion+cBonifica;
        cDesEPS=descuEps+cDesEPS;
        cdesPEN=descuPEN+cdesPEN;
        cSalarioNeto=salario+cSalarioNeto;
        document.getElementById('ingresarDatos').innerHTML += dentroTabla;
        break
    } 
    document.getElementById('ingresarDos').innerHTML = `<tr><td></td><td></td><td></td><td>${cSalarioBruto}</td><td>${cauxiTrans}</td><td>${cBonifica}</td><td>${cDesEPS}</td><td>${cdesPEN}</td><td>${cSalarioNeto}</td></tr>`;
    return dentroTabla;
}

function entra(){
    alert("Esta entrado al java");
}
