//Escriba una aplicación que encuentre el menor valor de varios enteros
function menorValor(){
    let cantNum=Number(prompt("Ingrese la cantidad de números q1ue desea evaluar: "));
    let menor= +Infinity;
    for(let i=0;i<cantNum;i++){
        let num=Number(prompt("Ingrese un número: "));
        if(num<menor){
            menor=num;
        }
    }
    return menor;
}
console.log(menorValor());