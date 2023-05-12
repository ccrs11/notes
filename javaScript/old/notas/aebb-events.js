function mostrarMensaje(){
    console.log("Se ha dado un click");
}

const title=document.querySelector("h1");
const parraf=document.querySelector("p");
//title.onclick=mostrarMensaje;
title.addEventListener("click",mostrarMensaje);
let count=0;
parraf.addEventListener("mouseover", () =>{
    parraf.textContent="has pasado" + (++count) + "veces";
})

parraf.addEventListener("mouseout", ()=>{
    parraf.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi ex explicabo, facilis odit accusantium vero ab! Repudiandae voluptas maiores sapiente tenetur laboriosam provident obcaecati libero aut deserunt. Porro, provident!";
})
