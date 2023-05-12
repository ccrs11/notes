/*function sorting(){
    alert("vousafdhn");
    let nombre=document.miformulario.nombre.value;
    vnombres.push(nombre);
    vnombres.sort();
    Document.miformulario.ordenados.value=vnombres.join("\n");
    Document.miformulario.nombre.value="";
}*/
let vnombres=[];
function sorting2(){
    let nombre=document.getElementById("nombre").value;
    vnombres.push(nombre);
    vnombres.sort();
    console.log(12)
    document.getElementById("ordenados").value = vnombres.join("\n");
    document.getElementById("nombre").value = "";
}

function cleanTxtArea(){
    vnombres=[];
    document.getElementById("ordenados").value="";
}
