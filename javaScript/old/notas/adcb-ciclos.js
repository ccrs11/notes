// color=prompt("Dar color suave: ");
// switch(color){
    // case "rojo":
        // alert("el color es rojo");
        // break;
    // case "verde":
        // alert("el color es verde");
        // break;
    // default:
        // alert("el color no es rojo ni verde.");
// }
// for(let i=0;i<10;i+=2){
    // alert(i);
// }
// let a=1;
// let b=1;
// alert(a);
// alert(b);
// for(let i=0, a=1, b=1;i<5;i++){
    // suma=a+b;
    // alert(suma);
    // a=b;
    // b=suma;
    // resta=a-b;
    // alert(resta);
    // a=b;
    // b=resta;
// }
// n1=1;n2=1;
// signo=1;
// alert(n1);alert(n2);
// for(let i=0,signo=1;i<5;i++){
    // let sig = n1 +signo*n2; 
    // alert(sig);
    // n1=n2;n2=sig;
    // signo*=-1;
// }

// let a=1;
// let b=1;
// alert(a);
// alert(b);
// i=0
// while(i<7){
    // suma=a+b;
    // alert(suma);
    // a=b;
    // b=suma;
    // resta=a-b;
    // alert(resta);
    // a=b;
    // b=resta;
    // i++
// }


n1=1;n2=1;
signo=1;
alert(n1);alert(n2);
i=0;
do{ 
    let sig = n1 +signo*n2; 
    alert(sig);
    n1=n2;n2=sig;
    signo*=-1;
    i++;
}
while(i<5);
