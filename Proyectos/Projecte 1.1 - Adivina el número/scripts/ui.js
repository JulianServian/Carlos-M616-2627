// Importa desde game.js las funciones y valores que controlan la lógica de la partida.
import { iniciarJuego, comprobarNumero, intentos, maxIntentos } from './game.js';

// Busca en el documento HTML el formulario donde se envían las respuestas.
const formulario = document.querySelector("#guess-form");
// Busca el campo de entrada donde el usuario escribe su número.
const entrada = document.querySelector("#user-input");
// Busca el elemento HTML que mostrará los mensajes de resultado.
const mensaje = document.querySelector("#message");
// Busca el elemento HTML que mostrará el número de intentos.
const intentosTexto = document.querySelector("#attempts");
// Busca el botón que permite reiniciar la partida.
const botonReiniciar = document.querySelector("#restart");

// Registra una función para responder al evento de envío del formulario del navegador.
formulario.addEventListener("submit", (e) => {
  // Evita que el navegador recargue la página al enviar el formulario.
  e.preventDefault();
  // Convierte el texto introducido por el usuario en un valor numérico.
  const numeroUsuario = Number(entrada.value);

  // Comprueba que el valor sea un número y que esté dentro del rango permitido.
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    // Informa al usuario de que debe introducir un número válido.
    mensaje.textContent = "Introduce un número válido entre 1 y 100";
    // Termina esta ejecución sin comprobar un dato incorrecto.
    return;
  }

  // Envía el número válido a la lógica del juego para obtener el resultado.
  const resultado = comprobarNumero(numeroUsuario);
  // Escribe el resultado devuelto dentro del elemento de mensajes.
  mensaje.textContent = resultado;
  // Actualiza el texto visible con el número actual de intentos y el máximo permitido.
  intentosTexto.textContent = `Intentos: ${intentos}/${maxIntentos}`;

  // Comprueba si el usuario acertó o si ya agotó todos los intentos disponibles.
  if (resultado.includes("Correcto") || intentos >= maxIntentos) {
    // Desactiva el botón de envío para impedir más respuestas en la partida terminada.
    formulario.querySelector("button").disabled = true;
  }

  // Vacía el campo de entrada para preparar el siguiente intento.
  entrada.value = "";
});

// Registra una función para responder al clic sobre el botón de reinicio.
botonReiniciar.addEventListener("click", () => {
  // Reinicia el número secreto y el contador mediante la lógica de game.js.
  iniciarJuego();
  // Borra el mensaje de la partida anterior.
  mensaje.textContent = "";
  // Borra el texto que mostraba el contador de intentos anterior.
  intentosTexto.textContent = "";
  // Vuelve a activar el botón de envío para permitir una nueva partida.
  formulario.querySelector("button").disabled = false;
});