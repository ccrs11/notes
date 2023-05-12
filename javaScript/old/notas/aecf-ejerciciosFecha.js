//El usuario ingresa dos fechas y se le propone que construya un
//programa que calcule la diferencia en días entre estas dos.

function calcularDiferenciaEnDias(fecha1, fecha2) {
    const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día
    const fechaInicial = new Date(fecha1);
    const fechaFinal = new Date(fecha2);
    const diasTranscurridos = Math.round(Math.abs((fechaFinal - fechaInicial) / unDia));
    return diasTranscurridos;
}
    // Ejemplo de uso:
    const fecha1 = '2023-01-01';
    const fecha2 = '2023-04-19';
    const diferenciaEnDias = calcularDiferenciaEnDias(fecha1, fecha2);
    console.log(`La diferencia en días entre ${fecha1} y ${fecha2} es ${diferenciaEnDias}.`);

/*     La oficina de cartera desea que le construya un programa web al
    cual se le ingresa una fecha y que este calcuele y muestre que cual
    es la fecha que caé después de 90 días hábiles. */

    function sumarDiasHabiles(fechaInicio, diasHabiles) {
        let contadorDiasHabiles = 0;
        let fechaActual = new Date(fechaInicio);
        while (contadorDiasHabiles < diasHabiles) {
          // Avanzar al día siguiente
          fechaActual.setDate(fechaActual.getDate() + 1);
          // Verificar si el día actual es un día hábil
          if (fechaActual.getDay() !== 0 && fechaActual.getDay() !== 6) {
            contadorDiasHabiles++;
          }
        }
        
        return fechaActual;
      }
      // Ejemplo de uso
      let fechaInicio = new Date(2023, 3, 25); // 25 de abril de 2023
      let diasHabiles = 90;
      let fechaFinal = sumarDiasHabiles(fechaInicio, diasHabiles);
      console.log(fechaFinal); // Mostrará la fecha que cae después de 90 días hábiles
      

/* Hacer un función que reciba la hora actual y la que regrese esta
misma pero en diferente zona horaria. Ejemplo de función:
function calcZonaHor(hora, 'America/New_York')
 */

function calcZonaHor(hora, zonaHoraria) {
  let fechaActual = new Date();
  
  // Establecer la hora y la zona horaria especificadas
  let horas = hora.split(':');
  fechaActual.setHours(horas[0], horas[1]);
  fechaActual.toLocaleString('en-US', { timeZone: zonaHoraria });
  
  // Devolver la hora en formato HH:mm
  return ('0' + fechaActual.getHours()).slice(-2) + ':' + ('0' + fechaActual.getMinutes()).slice(-2);
}

// Ejemplo de uso
let horaActual = '10:30';
let zonaHoraria = 'America/New_York';

let horaEnZonaHoraria = calcZonaHor(horaActual, zonaHoraria);
console.log(horaEnZonaHoraria); // Mostrará la hora actual en la zona horaria especificada



/* Un servicio bancario desea poner a disposición de sus usuarios una
aplicación web donde estos puedan ingresar la fecha de corte de su
tarjeta de credito y la aplicación le muestre cuál es la fecha límite
de pago. Esta fecha límite se calcula, sumando 15 días calendario a
la fecha de corte más tres días de gracia.
 */


function fechaLimiteDePago(fechaDeCorte) {
    // Convertir la fecha de corte a un objeto Date
    let fechaCorte = new Date(fechaDeCorte);
    
    // Sumar 18 días a la fecha de corte (15 días calendario + 3 días de gracia)
    fechaCorte.setDate(fechaCorte.getDate() + 18);
    
    // Devolver la fecha límite de pago en formato "DD/MM/YYYY"
    return fechaCorte.toLocaleDateString('es-ES');
  }
  
  // Ejemplo de uso
  let fechaDeCorte = '2023-04-20';
  
  let fechaLimite = fechaLimiteDePago(fechaDeCorte);
  console.log('La fecha límite de pago es el', fechaLimite); // Mostrará la fecha límite de pago en formato "DD/MM/YYYY"



/* 
  Hacer un programa web que reciba una fecha (19-04-2023) y le de
  el formato de: "lunes, 19 de abril de 2023" */


function formatearFecha(fecha) {
    // Convertir la fecha a un objeto Date
    let fechaObj = new Date(fecha);
    // Obtener el nombre del día de la semana, el día del mes y el nombre del mes
    let diaDeLaSemana = fechaObj.toLocaleDateString('es-ES', { weekday: 'long' });
    let diaDelMes = fechaObj.toLocaleDateString('es-ES', { day: 'numeric' });
    let nombreDelMes = fechaObj.toLocaleDateString('es-ES', { month: 'long' });
    // Construir la cadena formateada
    let fechaFormateada = diaDeLaSemana + ', ' + diaDelMes + ' de ' + nombreDelMes + ' de ' + fechaObj.getFullYear();
    // Devolver la cadena formateada
    return fechaFormateada;
}
  // Ejemplo de uso
    let fecha = '2023-04-19';
    let fechaFormateada = formatearFecha(fecha);
    console.log(fechaFormateada); // Mostrará "miércoles, 19 de abril de 2023"
  


