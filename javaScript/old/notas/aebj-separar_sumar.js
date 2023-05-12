let rray=[0];
let num=12345;
let total=0;
function superInteger(){
    while(num>0){
        rray.push(num%10);
        num=Math.floor(num/10);
        console.log(rray);
    }
    return rray;
}
    // rray.forEach((elemento,i) => sum+=elemento);
    rray.forEach(function(a){total += a;});
    
