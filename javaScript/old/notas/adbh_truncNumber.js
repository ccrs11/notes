// create something that is used for
let numero=20014;
//numero=Number((prompt("Ingresar el número que necesita saber: ")));
count=0
while(numero>=1){
    numero=Math.trunc(numero/10);
    console.log(numero);
    count++;
}
console.log(`el número tiene ${count} digito(s).` );