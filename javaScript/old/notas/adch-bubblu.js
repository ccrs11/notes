function miSort(vector) {
    let len=vector.length;
    for(let i=0; i<len-1; i++) {
        for(let j=0;j<len-i-1;j++){
            if(vector[j]>vector[j+1]){
                let tmp=vector[j];
                vector[j] = vector[j+1];
                vector[j+1]=tmp;
            }
        }
    }
    return vector;
}
let vectoreglo=[1,20,141, 20.36,11];
console.log(vectoreglo);
let v2=miSort(vectoreglo);
console.log(v2);