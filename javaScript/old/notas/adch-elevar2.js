//create a function that elevates the odd numbers to cuadrate

function elevate(num) {
let [...res]=num;
    for(i=0; i<res.length; i++){
    if (res[i] % 2 !== 0) {
        res[i]=res[i]**2;
    }
    }
    return res;
}

let num=[1,3,6,8,9,54,12,789,645,45,456,6,45,456,46,23];
console.log(num);
let v2=elevate(num);
console.log(v2);

