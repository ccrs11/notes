const adivinarNumber = () => {
    const adivinarNumero = Math.floor(Math.random() * 1000) + 1;
    let bandera = false;
  
    alert("Adivina un número entre 1 y 1000");
  
    while (!bandera) {
      const NUMERO = parseInt(prompt("Intenta adivinar el número"));
     
      if (NUMERO === adivinarNumero) {
        bandera = true;
        alert("Adivinaste el número!");
      } else if (NUMERO > adivinarNumero) {
        alert("Ingresaste un avalor muy alto. try again.");
      } else {
        alert("Ingresaste un avalor muy alto. try again.");
      }
    }
  };
  
  adivinarNumber();