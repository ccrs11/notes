function valorTotalI(montoCredito,tasa){
    let vValorTotalI=0;
    return vValorTotalI=montoCredito+(montoCredito*tasa/100)
}

function capital(montoCredito,meses){
    let vCapital=0;
    vCapital=montoCredito/meses;
    return vCapital;
}
function interes(montoCredito,tasa, meses){
    let vInteres=0;
    vInteres=(montoCredito*tasa/100)/meses
    return vInteres;
}
function total(vCapital,vInteres){
    let vTotal=0;
    vTotal=vCapital+vInteres;
    return vTotal;
}

//let meses=Number(prompt("...Ingrese el número de meses del crédito...\n"));
//let tasa=Number(prompt("...Ingrese el valor de la tasa anual...\n"));
//let montoCredito=Number(prompt("...Ingrese el monto del préstamo...\n"));
let dentroTabla="";
function calcularMain(meses,tasa,montoCredito){
    let vMes=0;
    let valorTotal=valorTotalI(montoCredito,tasa);
    let valor=montoCredito;
    let vvTotal=0;
    let vvCapital=0;
    for(let i=0;i<meses;i++){
        valorTotal=valorTotal-vvTotal;
        valor=valor-vvCapital;
        vvCapital=capital(montoCredito,meses);
        vvTotal = total(capital(montoCredito,meses),interes(montoCredito,tasa,meses));
        vMes=i+1;
        dentroTabla += `<tr><td>${vMes}</td><td>${valor.toFixed(2)}</td><td>${valorTotal.toFixed(2)}</td><td>${capital(montoCredito,meses).toFixed(2)}</td><td>${interes(montoCredito,tasa, meses).toFixed(2)}</td><td>${total(capital(montoCredito,meses),interes(montoCredito,tasa, meses)).toFixed(2)}</td></tr>`;
    }
    return dentroTabla;
}

//calcularMain(12,12,1500000);

document.getElementById('inputData').innerHTML = dentroTabla;