import cargarTexto from "./cargartexto.js";
const cargartxt = document.getElementById("cargartxt");
const btnCargarTxt = document.getElementById("btntexto");

btnCargarTxt.addEventListener("click",(e)=>{
    cargarTexto(cargartxt);
    e.stopPropagation();
});

const btnCargarJson=document.getElementById("btnjson");
const tblBody=document.getElementById("dattable");
btnCargarJson.addEventListener("click", (e)=>{
    cargarJson(tblBody);
    e.stopPropagation();
})

function cargarJson(elemHTML){
    console.log("cargarJson")
    fetch("datos.json")
    .then(response => response.json())
    .then(datos =>{
        console.table(datos);
        buildTable(elemHTML,datos);
    })
}
function buildTable(elemHTML,datos){
    let fila="";
    for (let valor of datos){
        fila+=`
        <tr>
            <td>${valor.NOMBRE}</td>
            <td>${valor.EQUIPO}</td>
            <td>${valor.EDAD}</td>
            <td id="tbling">
                <img src= ${valor.SEXO === "M" ? "man.png" : "woman.png"} alt="Camper">
            </td>
        </tr>`
    }
    elemHTML.innerHTML=fila;
}
