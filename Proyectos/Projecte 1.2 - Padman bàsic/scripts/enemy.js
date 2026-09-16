// Define una función que crea enemigos en posiciones aleatorias del tablero.
function generarEnemigos(filas, columnas, cantidad, padman) {
    // Crea el array que contendrá los enemigos generados.
    const enemigos = [];
    // Crea un conjunto para recordar posiciones ya ocupadas sin duplicarlas.
    let posiciones = new Set();
    // Repite la generación hasta alcanzar la cantidad de enemigos solicitada.
    while (enemigos.length < cantidad) {
        // Elige aleatoriamente una fila válida usando la API Math de JavaScript.
        const fila = Math.floor(Math.random() * filas);
        // Elige aleatoriamente una columna válida usando la API Math de JavaScript.
        const columna = Math.floor(Math.random() * columnas);
        // Construye una clave de texto que identifica de forma única la celda elegida.
        const clave = `${fila},${columna}`;
        // Comprueba que la celda esté libre y no coincida con la posición de Padman.
        if (!posiciones.has(clave) && !(fila === padman.fila && columna === padman.columna)) {
            // Guarda la posición para evitar generar otro enemigo en la misma celda.
            posiciones.add(clave);
            // Añade un nuevo objeto enemigo con sus coordenadas y estado inicial.
            enemigos.push({ fila, columna, vivo: true });
        }
    }
    // Devuelve el array completo de enemigos a quien llamó a la función.
    return enemigos;
}