/*Hacer una función que devuelva true or false si un elemento existe en un vextor*/
function existeVector(vector,element) {
    for (let i=0;i<vector.length;i++)
        if (vector[i]==element){
            return true;
        }
    return false;
    }

    let v =["daniela","zafiro","ana","gabriela","laura"]
    console.log(v);
    let v2=existeVector(v,"ana");
    console.log(v2);