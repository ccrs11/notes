//Tabla de interes donde prestan un dinero y tiene un interés anual a 12 meses calcular valor total y valor mensual, se va descontando hasta que ya no queda nada mes | valor| valor total | capital |interes| total hacer que aparezca en HTML//
function eltotal(montoCredito,interes,meses){
    let total=(montoCredito+(montoCredito*(interes)))/meses;
    return total;
}

function paraCapital(montoCredito,meses){
    let capital=montoCredito/meses;
    return capital;
}

function paraInteres(montoCredito,interes,meses){
    let intereses=(montoCredito*interes)/meses;
    return intereses;
}
function valorTotal(meses){
    let itotal
}
