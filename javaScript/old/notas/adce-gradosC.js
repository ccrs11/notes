function cantidadPalabras(cadena){
    //ingresar un prompt para leer la cadena de camelcase
    //como la primera palabra va en minuscula inicio el contador desde 1
    let count=1;
    //coloco un for para que recorra toda la cadena como un arreglo e identifique las mayúsculas. Cada mayúscula indica una palabra nueva.
    for (i=0;i<cadena.length;i++){
        if(cadena[i].match(/[A-Z]/)){
            count++;
        }
    }
    //imprimo la cantidad de palabras que están almacenadas en la variable count.
    return count;
    }
let cadena=prompt("ingresar la palabra en CamelCase que desea calcular: ");
cantidad=cantidadPalabras(cadena);
alert(cantidad);

//segundo

let gradosC = Number(prompt("ingrese el grado en Celsius: "));
let gradosF = gradosC => (gradosC*1.8)+32;
console.log(gradosF(gradosC));

//tercero

