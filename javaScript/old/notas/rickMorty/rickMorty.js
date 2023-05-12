function construirTarjeta(personajes){
    const main=document.querySelector("main");
    personajes.results.forEach(per => { //results es el que tiene el vector en la API
        console.log(per);
        const articulo=document.createRange().createContextualFragment(
            `
            <article>
                <div class="image-container">
                    <img src="${per.image}" alt="personajeRick">
                </div>
                <h2>${per.name}</h2>
                <span>${per.status}</span>
            </article>
            `

        )
        main.append(articulo);
    });

}

function obtenerPersonajes(){
    fetch("https://rickandmortyapi.com/api/character")
    .then (result => result.json())
    .then(datos =>{
        console.log(datos);
        construirTarjeta(datos);
    })
    .catch((err)=>{
        console.log("error al consumir el API\n",err.message);
    })
    .finally(()=>{console.log("Se ha consumido todo el API");
})
}
obtenerPersonajes();