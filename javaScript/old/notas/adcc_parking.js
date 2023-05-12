let parkingPrice=0;
let countPrice=0;
let user=prompt("insert user's name");
function masTresMenostf(hours){
    return parkingPrice;
}
function calculo(hours){
    if(hours<=3){
        parkingPrice=2.00;
    }else if(hours>=3 && hours<=24){
        aumento=hours-3;
        parkingPrice=2.00+0.50*aumento;    
    }else if(hours===24){
        parkingPrice=10.00;
    }
    countPrice+=parkingPrice;
    return parkingPrice;
}

while(user!="off"){
    let hours=Number(prompt("insert the parking hours: "));
    calculo(hours);
    alert(parkingPrice);
    user=prompt("insert user's name");
}
alert(`hola ${countPrice}`);
