//function anonimus to return max
 let maximum = vector =>{
    if(vector.length === 0)
        return null;
    let mayor=vector[0];
    for(let i=1;i<vector.length;i++){
        if(vector[i]>mayor){
            mayor=vector[i];
        }
    }
    return mayor;
}

arreglo=[1,"hola",true, 20.36,"res"];

res=maximum(arreglo);
console.log(res);