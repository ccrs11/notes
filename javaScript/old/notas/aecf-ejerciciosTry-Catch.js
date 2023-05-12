/* Escriba una función que calcule el cuadrado de un número. */
function calcularCuadradoDeNumero(numero) {
    if (isNaN(numero))
    throw new Error('La entrada debe ser un número');
    return numero * numero;
    }
    try {
    const input = prompt('Ingrese un número');
    const numero = parseFloat(input);
    const resultado = calcularCuadradoDeNumero(numero);
    console.log(`El cuadrado de ${numero} es ${resultado}`);
    } catch (error) {
    console.error(`Se produjo un error: ${error.message}`);
}
/* 
Realice una aplicación web que permita a los usuarios registrarse
para recibir actualizaciones de noticias. Para registrarse, los
usuarios deben proporcionar una dirección de correo electrónico
válida. Con excepciones asegúrate de que la dirección de correo
electrónico proporcionada por el usuario sea válida y, en caso
contrario, mostrar un mensaje de error personalizado en la interfaz
de usuario. */

function registrarUsuario(email) {
    try {
    if (!email || !email.includes('@')) {
    throw new Error('Dirección de correo electrónico no válida.');
    }
    // Lógica para registrar al usuario
    } catch (error) {
    mostrarMensajeDeError(error.message);
    }
}
function mostrarMensajeDeError(mensaje) {
// Código para mostrar el mensaje de error en la interfaz de usuario
}
/* 
Desarrolle una funcion validarFormulario(datosFormulario) que
valide y lance excepciones con un mesaje de error. Te dan el
esqueleto de la función: */
function validarFormulario(datosFormulario) {
    try {
    if (!datosFormulario.nombre) {
    throw new Error('El campo de nombre es requerido.');
    }
    if (!datosFormulario.email || !datosFormulario.email.includes('@')) {
    throw new Error('El campo de email es requerido y debe ser una dirección de correo electrónico válida.');
    }
    // Validar otros campos del formulario
    // Si todos los campos son válidos, realizar la acción correspondiente
    } catch (error) {
    console.error(error.message);
    }
}
