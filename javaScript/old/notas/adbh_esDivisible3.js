// let numero = prompt(Number(("Ingresar número para verificar si es divisible entre 3: ")));
let numero=21343;
let arreglo = [];
let suma = 0;
while (numero > 0) {
  arreglo.push(numero % 10);
  // ¿cómo agregarlo al final?
  numero = Math.floor(numero / 10);
  console.log(numero)
}
for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}
if ((suma/3)%1 === 0){
  console.log("Es divisible");
}else{
  console.log("No es divisible");
}