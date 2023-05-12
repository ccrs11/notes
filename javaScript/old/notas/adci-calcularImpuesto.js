function porcentaje(vector,impuesto){
    let vec = [];
    for(i=0;i<vector.length;i++){
        vec.push(Math.round(vector[i]*impuesto));
    }
    return vec;
}

function porcentaje2(vector, impuesto) {
    let vec = [];
    vector.forEach(function(element) {
      vec.push(Math.round(element * impuesto));
    });
    return vec;
}

function porcentaje3(vector,impuesto){
    let vec = vector.map(function(element){
     return Math.round(element*impuesto);
    })
    return vec;
}

/* function percentaje2(vector,impuesto){
    let vect=[];
    vector.forEach((element)=>{
            console.log(element);
            console.log(impuesto);
    }
} */

n=[12,13,56,25,36]
array1=["Juan",2000,3];
array2=["Pedro",2500,4];
array3=["Maria",2600,5];
array4=["Ana",2700,6];

console.log(porcentaje3(n,0.19));