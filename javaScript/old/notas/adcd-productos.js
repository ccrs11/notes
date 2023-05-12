// calcular el producto de los números impares entre 1 y 15;

// Entrada => número con un for, solo saca los números impares

//proceso => sumar los números hasta el límite

//salida => todos los resultados

const prodImpares= function(ini,limite){
    let prod=1;
    console.log("NUM \t\t\t PRODUCTO");
    console.log("-".repeat(40));
    for(let i=ini;i<=limite;i++){
        if(i%2!==0){
            prod*=i;
        }
        console.log(`${i} \t\t\t ${prod}`);
    }
    return prod;
}
console.log(prodImpares(1,15));