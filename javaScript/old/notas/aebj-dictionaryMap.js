//crear diccionario de mapas
function distanciaLetras(s, distancia) {
    const dLetras = new Map();
    //En el diccionario voy guardando la posición de el último elemento
    for (let i = 0; i <= s.length; ++i) {
        let letra = s.charAt(i);
        if (dLetras.has(letra)) {
            d = i - dLetras.get(letra) - 1;
            if (d >= 0) {
                pos = letra.charCodeAt(0) - 97; //or charCodeAt("a")
                if (d !== distancia[pos]) {
                    return false;
                }
            }
        } else {
            dLetras.set(letra, i);
            console.log(dLetras);
        }
    }
    return true;
}

let s = "abaccb";
let distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let rta = distanciaLetras(s, distance)
console.log(rta)
