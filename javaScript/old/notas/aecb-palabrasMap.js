let string = "Este es un ejemplo de un texto que es ideal para procesar";
const mapa = new Map();

function contarPalabras(string){
    let separado = string.split(" ");
    separado.forEach((e)=>{
        if(mapa.has(e)){
            count = mapa.get(e) + 1;
            mapa.set(e,count)
        }else{
            mapa.set(e,1)
        }
    })
    return mapa;
}
console.log(contarPalabras(string));