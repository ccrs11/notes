export default

function cargarTexto(elemHTML){
    fetch("datos.csv")
    .then(datos => datos.text())
    .then(data => {
        console.log(data);
        cargartxt.innerHTML+=data;
    })
}