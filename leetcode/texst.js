s = "abcabcbb"
array1 = new Array();
array1.push("a");
noEsta = false;
console.log(array1);
for(i=0;i<s.length;i++){
array1.forEach((e)=>{
    if(e!==s[i]){
        noEsta=true;
    }
});
console.log(noEsta);
}