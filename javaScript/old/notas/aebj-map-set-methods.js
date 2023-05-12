const cLetras= new Set(["a","b","c","d"])
//const cLetras = new Set();
//cLetras.add("a");
//cLetras.add("b");
//cLetras.add("c");
//cLetras.add("d");
console.log(cLetras);
//eliminar
cLetras.delete("c");
console.log(cLetras);
//Existe?
console.log(cLetras.has("h"));
//Cantidad de elementos?
console.log(cLetras.size);
//Iterar un conjunto con FOREACH
let str="";
cLetras.forEach((e)=>{
    str += e + ",";
})
console.log(str);
//iterar el conjunto con for ... all
console.log(cLetras.values()) //Elemento especial para recorrer y se llama iterador con ese iterador se puede usar el for all itera por elementos

let strr="";
for(let e of cLetras.values()){
    strr += e + ",";
}
console.log(strr);
