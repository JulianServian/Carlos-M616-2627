function dibuixaUnivers(columnes, files) {
    const tablero = document.querySelector('#game-board');
    const univers = document.createElement('div');

    univers.classList.add('univers');

    for (let fila = 0; fila < files; fila++) {
        const filaElement = document.createElement('div');
        filaElement.classList.add('fila');

        for (let columna = 0; columna < columnes; columna++) {
            const celula = document.createElement('div');
            const id = `${fila}-${columna}`;

            celula.classList.add('celula');
            celula.dataset.id = id;
            celula.textContent = id;

            filaElement.appendChild(celula);
        }

        univers.appendChild(filaElement);
    }

    tablero.replaceChildren(univers);
}