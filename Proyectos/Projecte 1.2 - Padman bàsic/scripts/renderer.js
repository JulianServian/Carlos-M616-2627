// Define la función que transforma la matriz del juego en elementos HTML visibles.
function dibujarTablero(matriz) {
    // Busca el contenedor HTML donde se dibujará el tablero.
    const tablero = document.querySelector('#game-board');
    // Elimina los elementos dibujados anteriormente para representar el nuevo estado.
    tablero.innerHTML = '';

    // Recorre todas las filas de la matriz recibida.
    for (let fila = 0; fila < matriz.length; fila++) {
        // Recorre todas las columnas de la fila actual.
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            // Crea un elemento div que representará una celda del tablero.
            const celda = document.createElement('div');
            // Añade a la celda la clase CSS común para aplicar su estilo.
            celda.classList.add('celda');

            // Comprueba si el valor de la matriz representa a un enemigo.
            if (matriz[fila][columna] === 1) {
                // Añade la clase CSS específica para el aspecto del enemigo.
                celda.classList.add('enemigo');
                // Crea un elemento de imagen para mostrar el recurso gráfico del enemigo.
                const imagen = document.createElement('img');
                // Indica la ruta relativa del archivo de imagen del enemigo.
                imagen.src = 'assets/images/ghost.png';
                // Define un texto alternativo para accesibilidad y casos sin imagen.
                imagen.alt = 'Enemigo';
                // Hace que la imagen ocupe todo el ancho de la celda.
                imagen.style.width = '100%';
                // Hace que la imagen ocupe toda la altura de la celda.
                imagen.style.height = '100%';
                // Inserta la imagen dentro del elemento de celda.
                celda.appendChild(imagen);
            // Comprueba si el valor de la matriz representa a Padman.
            } else if (matriz[fila][columna] === 2) {
                // Añade la clase CSS específica para el aspecto de Padman.
                celda.classList.add('padman');
                // Crea un elemento de imagen para mostrar el recurso gráfico de Padman.
                const imagen = document.createElement('img');
                // Indica la ruta relativa del archivo de imagen de Padman.
                imagen.src = 'assets/images/pacman.png';
                // Define un texto alternativo para accesibilidad y casos sin imagen.
                imagen.alt = 'Padman';
                // Hace que la imagen ocupe todo el ancho de la celda.
                imagen.style.width = '100%';
                // Hace que la imagen ocupe toda la altura de la celda.
                imagen.style.height = '100%';
                // Inserta la imagen dentro del elemento de celda.
                celda.appendChild(imagen);
            // Ejecuta este caso cuando la celda no contiene ningún personaje.
            } else {
                // Añade la clase CSS que representa una celda vacía.
                celda.classList.add('vacia');
            }

            // Guarda la fila de la celda como un atributo de datos HTML.
            celda.dataset.fila = fila;
            // Guarda la columna de la celda como un atributo de datos HTML.
            celda.dataset.columna = columna;
            // Añade la celda ya configurada al contenedor del tablero.
            tablero.appendChild(celda);
        }
    }
}
// Escribe en la consola del navegador un mensaje que confirma la carga del renderer.
console.log("Renderer script cargado");