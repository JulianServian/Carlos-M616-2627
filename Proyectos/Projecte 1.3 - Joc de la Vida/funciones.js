//Dibujar 
export function dibuixaUniversAmbEstat(matriu) {
    let univers = '<div class="univers">';
    for (let i = 0; i < matriu.length; i++) {
        univers += '<div class="fila">';
        for (let j = 0; j < matriu[i].length; j++) {
            let estat = matriu[i][j] ? 'viva' : 'muerta';
            univers += `<div class="celula ${estat}" data-id="${i}-${j}"></div>`;
        }
        univers += '</div>';
    }
    univers += '</div>';
    document.querySelector("#univers-container").innerHTML += univers;
}

// Funció aleatori()
export function aleatori() {
    if (Math.random() < 0.5) {
        return true;
    } else {
        return false;
    }
}

// Funció aleatoriPercentatge(percentatge)
export function aleatoriPercentatge(percentatge) {
    if (Math.random() * 100 < percentatge) {
        return true;
    } else {
        return false;
    }
}

export function crearMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            fila.push(aleatori()); 
        }
        matriz.push(fila);
    }
    return matriz;
}

// Funció comptarVeinsVius(matriu, x, y)
export function comptarVeinsVius(matriu, x, y) {
    let comptador = 0;

    // Direccions dels veins: (dx, dy)
    let direccions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],            [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let i = 0; i < direccions.length; i++) {
        let dx = direccions[i][0];
        let dy = direccions[i][1];
        let nx = x + dx;
        let ny = y + dy;

        // Comprovamos que la nueva posicion esta en mi matriz
        if (nx >= 0 && nx < matriu.length && ny >= 0 && ny < matriu[0].length) {
            if (matriu[nx][ny] === true) {
                comptador++;
            }
        }
    }

    return comptador;
}


// Funció evolucionarCelula
export function evolucionarCelula(matriu, x, y) {
    const estatActual = matriu[x][y]; // true (viva) o false (morta)
    const veinsVius = comptarVeinsVius(matriu, x, y);

    if (estatActual) {
        // Cèl·lula viva
        if (veinsVius < 2) return false; // solitud
        if (veinsVius === 2 || veinsVius === 3) return true; // sigue viva
        return false; // poblacion excesiva
    } else {
        //celula muerta
        if (veinsVius === 3) return true; // reproducció
        return false;
    }
}