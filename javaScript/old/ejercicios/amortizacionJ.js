function calcular() {
                
  const monto = Number(document.getElementById("monto").value);
  const interes = Number(document.getElementById("interes").value);
  const meses = Number(document.getElementById("meses").value);


  const interesMensual = interes / 100;
  const pagoMensual = monto /meses;



  let saldo = monto;
  let totalInteres = 0;

  
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  tabla.innerHTML += "<tr><th>Mes</th><th>Valor</th><th>Valor total</th><th>Capital</th><th>Interés</th><th>Total</th></tr>";
  for (let mes = 1; mes <= meses; mes++) {
    const interesMes = saldo * interesMensual;
    const capitalMes = pagoMensual - interesMes;
    saldo -= capitalMes;
    totalInteres += interesMes;

    tabla.innerHTML += `<tr><td>${mes}</td><td>$${pagoMensual.toFixed(2)}</td><td>$${(pagoMensual * mes).toFixed(2)}</td><td>$${capitalMes.toFixed(2)}</td><td>$${interesMes.toFixed(2)}</td><td>$${pagoMensual.toFixed(2)}</td></tr>`;
  }



  tabla.innerHTML += `<tr><td>Total</td><td></td><td>$${(pagoMensual * meses).toFixed(2)}</td><td>$${monto.toFixed(2)}</td><td>$${totalInteres.toFixed(2)}</td><td>$${(monto + totalInteres).toFixed(2)}</td></tr>`;
}

