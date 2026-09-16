// Declara la variable que almacenará el número secreto generado para la partida.
let numeroSecreto;
// Declara la variable que contará cuántos intentos ha realizado el usuario.
let intentos;
// Define como constante el máximo de intentos permitidos en una partida.
const maxIntentos = 10;

// Define la función que inicia o reinicia el estado de la partida.
function iniciarJuego() {
  // Genera un número aleatorio entero entre 1 y 100 usando la API Math del lenguaje JavaScript.
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  // Reinicia el contador de intentos a cero al comenzar la partida.
  intentos = 0;
}

// Define la función que compara el número del usuario con el número secreto.
function comprobarNumero(numeroUsuario) {
  // Incrementa en uno el número de intentos realizados.
  intentos++;
  // Comprueba si el número recibido coincide exactamente con el número secreto.
  if (numeroUsuario === numeroSecreto) {
    // Devuelve el mensaje que indica que la respuesta es correcta.
    return "¡Correcto!";
  // Si no coincide, comprueba si el número recibido es mayor que el secreto.
  } else if (numeroUsuario > numeroSecreto) {
    // Devuelve el mensaje que indica que el usuario se ha pasado.
    return "Demasiado alto";
  // Ejecuta este caso cuando el número recibido es menor que el secreto.
  } else {
    // Devuelve el mensaje que indica que el usuario debe probar un número mayor.
    return "Demasiado bajo";
  }
}

// Inicia la primera partida cuando se carga este módulo.
iniciarJuego();

// Exporta las funciones y valores para que otros módulos puedan utilizarlos.
export { iniciarJuego, comprobarNumero, intentos, maxIntentos };