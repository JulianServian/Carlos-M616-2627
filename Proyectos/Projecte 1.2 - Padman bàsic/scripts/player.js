// Define la función que actualiza el texto de puntuación en la página.
function mostrarPuntuacion(puntuacion) {
    // Busca el elemento HTML identificado como Info mediante la API DOM del navegador.
    const info = document.querySelector('#Info');
    // Escribe en el elemento la cantidad de enemigos comidos recibida.
    info.textContent = `Enemigos comidos: ${puntuacion}`;
}