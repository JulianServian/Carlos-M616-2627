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