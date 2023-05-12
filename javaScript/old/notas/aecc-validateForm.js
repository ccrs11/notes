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