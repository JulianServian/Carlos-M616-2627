// Define la cantidad fija de filas que tendrá el tablero.
const FILAS = 10;
// Define la cantidad fija de columnas que tendrá el tablero.
const COLUMNAS = 10;

// Declara la matriz que representará visualmente el estado del tablero.
let tablero = [];
// Declara el array que almacenará los enemigos de la partida.
let enemigos = [];
// Crea el objeto que representa a Padman y su estado inicial.
let padman = {
    // Coloca a Padman en la fila central del tablero.
    fila: Math.floor(FILAS / 2),
    // Coloca a Padman en la columna central del tablero.
    columna: Math.floor(COLUMNAS / 2),
    // Inicializa la puntuación del jugador a cero.
    puntuacion: 0
};

// Define la función que construye una matriz vacía con el tamaño del tablero.
function crearMatriz() {
    // Sustituye el tablero anterior por un array vacío.
    tablero = [];
    // Recorre todas las filas que debe tener el tablero.
    for (let i = 0; i < FILAS; i++) {
        // Crea un array temporal para representar una fila.
        let fila = [];
        // Recorre todas las columnas de la fila actual.
        for (let j = 0; j < COLUMNAS; j++) {
            // Añade un cero para representar una celda vacía.
            fila.push(0);
        }
        // Añade la fila terminada a la matriz del tablero.
        tablero.push(fila);
    }
}

// Define la función que genera enemigos sin repetir posiciones ni ocupar la de Padman.
function generarEnemigos(filas, columnas, cantidad, padman) {
    // Crea el array donde se guardarán los enemigos creados.
    const enemigos = [];
    // Crea un array con las claves de las posiciones ya utilizadas.
    let posiciones = [];
    // Sigue generando posiciones hasta alcanzar la cantidad indicada.
    while (enemigos.length < cantidad) {
        // Calcula una fila aleatoria dentro de los límites recibidos.
        const fila = Math.floor(Math.random() * filas);
        // Calcula una columna aleatoria dentro de los límites recibidos.
        const columna = Math.floor(Math.random() * columnas);
        // Forma una clave textual para identificar la combinación de fila y columna.
        const clave = fila + '-' + columna;

        // Comprueba que la posición no esté repetida y que no sea la de Padman.
        if (!posiciones.includes(clave) && !(fila === padman.fila && columna === padman.columna)) {
            // Registra la clave de la nueva posición ocupada.
            posiciones.push(clave);
            // Añade el enemigo como objeto vivo con sus coordenadas.
            enemigos.push({ fila, columna, vivo: true });
        }
    }
    // Devuelve la lista de enemigos generados.
    return enemigos;
}

// Define la función que prepara el tablero y coloca sus personajes iniciales.
function inicializarTablero() {
    // Construye una matriz vacía de diez filas por diez columnas.
    crearMatriz();
    // Genera diez enemigos evitando la posición actual de Padman.
    enemigos = generarEnemigos(FILAS, COLUMNAS, 10, padman);
    // Recorre cada enemigo para colocarlo en la matriz si sigue vivo.
    enemigos.forEach(e => {
        // Representa un enemigo vivo mediante el valor numérico uno.
        if (e.vivo) tablero[e.fila][e.columna] = 1;
    });
    // Representa a Padman mediante el valor numérico dos en su posición.
    tablero[padman.fila][padman.columna] = 2;
}

// Inicializa la primera configuración del tablero.
inicializarTablero();
// Solicita al renderer que dibuje la matriz inicial en el documento HTML.
dibujarTablero(tablero);
// Comprueba si existe una función de puntuación antes de intentar llamarla.
if (typeof mostrarPuntuacion === 'function') {
    // Muestra la puntuación inicial de Padman.
    mostrarPuntuacion(padman.puntuacion);
}

// Registra un listener del navegador para controlar las teclas de movimiento.
document.addEventListener('keydown', function(event) {
    // Empieza el próximo movimiento conservando la fila actual de Padman.
    let nuevaFila = padman.fila;
    // Empieza el próximo movimiento conservando la columna actual de Padman.
    let nuevaColumna = padman.columna;

    // Reduce la fila cuando el usuario pulsa la flecha superior.
    if (event.key === 'ArrowUp') nuevaFila--;
    // Aumenta la fila cuando el usuario pulsa la flecha inferior.
    if (event.key === 'ArrowDown') nuevaFila++;
    // Reduce la columna cuando el usuario pulsa la flecha izquierda.
    if (event.key === 'ArrowLeft') nuevaColumna--;
    // Aumenta la columna cuando el usuario pulsa la flecha derecha.
    if (event.key === 'ArrowRight') nuevaColumna++;

    // Ignora el movimiento si la nueva posición queda fuera del tablero.
    if (nuevaFila < 0 || nuevaFila >= FILAS || nuevaColumna < 0 || nuevaColumna >= COLUMNAS) return;

    // Recorre todos los enemigos para comprobar si Padman se mueve sobre alguno.
    for (let i = 0; i < enemigos.length; i++) {
        // Comprueba que el enemigo esté vivo y que coincida con la nueva posición.
        if (enemigos[i].vivo && enemigos[i].fila === nuevaFila && enemigos[i].columna === nuevaColumna) {
            // Marca como muerto al enemigo alcanzado por Padman.
            enemigos[i].vivo = false;
            // Aumenta en un punto la puntuación por el enemigo comido.
            padman.puntuacion++;
            // Comprueba de nuevo que la función visual de puntuación exista.
            if (typeof mostrarPuntuacion === 'function') {
                // Actualiza en pantalla la puntuación actualizada.
                mostrarPuntuacion(padman.puntuacion);
            }
        }
    }

    // Vacía la posición anterior de Padman en la matriz.
    tablero[padman.fila][padman.columna] = 0;
    // Actualiza la fila de Padman a la posición validada.
    padman.fila = nuevaFila;
    // Actualiza la columna de Padman a la posición validada.
    padman.columna = nuevaColumna;
    // Recorre los enemigos para reflejar en la matriz cuáles siguen vivos.
    enemigos.forEach(e => {
    // Dibuja los enemigos vivos como uno y limpia las posiciones de los muertos.
    if (e.vivo) tablero[e.fila][e.columna] = 1;
    else tablero[e.fila][e.columna] = 0;
    });

    // Coloca a Padman en su nueva posición usando el valor numérico dos.
tablero[padman.fila][padman.columna] = 2;

    // Redibuja el tablero para mostrar el movimiento y el estado actualizado.
    dibujarTablero(tablero);

    // Comprueba si la puntuación indica que todos los enemigos fueron comidos.
    if (padman.puntuacion === enemigos.length) {
        // Programa el mensaje de victoria para ejecutarlo después de un breve retraso.
        setTimeout(() => {
            // Muestra una alerta nativa del navegador anunciando la victoria.
            alert('Ganaste!');
        // Define un retraso de cien milisegundos para permitir el redibujado previo.
        }, 100);
    }
});