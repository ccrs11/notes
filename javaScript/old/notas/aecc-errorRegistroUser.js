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