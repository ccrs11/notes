//La idea es barajar todo antes de llegar al resultado
function barajando(s, vector){
    let res = '';
  
    for (let i = 0; i < vector.length; i++) {
        res += s[vector.indexOf(i)];
    }
  
    return res;
}

s = "codeleet";
s2 = "abc";
indices2 = [0,1,2];
indices = [4,5,6,7,0,2,1,3];
console.log(barajando(s2,indices2));