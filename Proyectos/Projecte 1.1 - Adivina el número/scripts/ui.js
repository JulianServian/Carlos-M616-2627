import { iniciarJuego, comprobarNumero, intentos, maxIntentos } from './game.js';

const formulario = document.querySelector("#guess-form");
const entrada = document.querySelector("#user-input");
const mensaje = document.querySelector("#message");
const intentosTexto = document.querySelector("#attempts");
const botonReiniciar = document.querySelector("#restart");

// Evento al enviar el formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroUsuario = Number(entrada.value);

  // Validación de entrada
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    mensaje.textContent = "Introduce un número válido entre 1 y 100";
    return;
  }

  // Comprobamos el número
  const resultado = comprobarNumero(numeroUsuario);
  mensaje.textContent = resultado;
  intentosTexto.textContent = `Intentos: ${intentos}/${maxIntentos}`;

  // Si acierta o se acaban los intentos, deshabilitamos el botón
  if (resultado.includes("Correcto") || intentos >= maxIntentos) {
    formulario.querySelector("button").disabled = true;
  }

  entrada.value = "";
});

// Evento para reiniciar el juego
botonReiniciar.addEventListener("click", () => {
  iniciarJuego();
  mensaje.textContent = "";
  intentosTexto.textContent = "";
  formulario.querySelector("button").disabled = false;
});