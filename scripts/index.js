function validacionFormulario() {
    // Datos de formulario
    let nombre = document.forms[0]["nombre"].value;
        email = document.forms[0]["email"].value;
        asunto = document.forms[0]["asunto"].value;
        mensaje = document.forms[0].mensaje.value;
        enviar = document.forms[0]["enviar"].value;

    if (nombre == "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (email == "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return false;
    }
    
    if (asunto == "") {
    alert("Por favor, ingresa el asunto del mensaje.");
    return false;
    }
    
    if (mensaje == "") {
        alert("Por favor, ingresa el asunto del mensaje.");
        return false;
    }

    // Si todo está bien, enviar el formulario
    alert("Formulario enviado con éxito.");
    return true;
}