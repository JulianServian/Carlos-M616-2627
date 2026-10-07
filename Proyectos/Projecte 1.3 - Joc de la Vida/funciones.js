//Dibujar 
function dibuixaUnivers(columnes, files) {
    const tablero = document.querySelector('#game-board');
    let html = '<div class="univers">';

    for (let fila = 0; fila < files; fila++) {
        html += '<div class="fila">';

        for (let columna = 0; columna < columnes; columna++) {
            const id = `${fila}-${columna}`;
            html += `<div class="celula" data-id="${id}">${id}</div>`;
        }

        html += '</div>';
    }

    html += '</div>';
    tablero.innerHTML = html;
}

// Funció aleatori()
export function aleatori() {
    if (Math.random() < 0.5) {
        return true;
    } else {
        return false;
    }
}