const calcInteres = (p,r,n) => p*((1+r)**n);

const buildFila=(anio,monto) =>{
    return `<tr>
        <td>${anio}</td>
        <td>${monto.toFixed(2)}</td>
    </tr>`;
    
}
function montoDeposito(){
    let p=Number(prompt("Insert the invertion ammount"));
    let r=0.05;
    let n=10;
    let strHTML="";
    console.log("año \t\t Monto en depósito");
    console.log("-".repeat(20));
    let monto =0;
    for (let i=1;i<=n;i++){
        monto=calcInteres(p,r,i);
        console.log(`${i} \t\t ${monto.toFixed(2)}`);
        strHTML += buildFila(i,monto);
    }   
    //return strHTML;
    document.getElementById("respuesta").innerHTML=strHTML;
}
function message(){
    alert("valor bien")
}
