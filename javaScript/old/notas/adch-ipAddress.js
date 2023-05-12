alert("javaOk");

//Insertar una dirección IP dentro de comillas
string=prompt("Ingresar la dirección IP dentro de comillas")
//Identificar el inicio y final con las comillas, probablemente un String tenga la función de identificar al inicio y al final (trim?)
if(string.startWith("\"") && string.endWith("\"")){
    //for(i=0; i<string.length(); i++){
    //res=string[i].replace(".","[.]");
    alert("res")};
//else{
  //  alert("The ip isn't within comillas")}
//Despues de identificar, crear un for para recorrer por dentro y cuando encuentre (if) un punto entonces encerrar el punto en corchetes.
