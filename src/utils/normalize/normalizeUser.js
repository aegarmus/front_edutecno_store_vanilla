export const normalizeUserRegister = (nombre, apellido_paterno, apellido_materno, email, telefono) => {
    //Validar cada uno de los datos (Eso es lo ideal)

    return {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono
    }
}