const readline = require('readline-sync');
let lado1 = Number(readline.question("Ingrese el lado #1: "));
let lado2 = Number(readline.question("Ingrese el lado #2: "));
let lado3 = Number(readline.question("Ingrese el lado #3: "));

if (lado1==lado2 && lado2==lado3){
  alert("Es un triangulo equilatero");
}else if(lado1==lado2 || lado2==lado1 || lado1==lado3){
  alert("Es un triangulo isóceles");
}else{
  alert("Es un triangulo Escaleno")
}