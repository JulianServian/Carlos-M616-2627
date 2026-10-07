function dibujarTablero(matriz) {
    const tablero = document.querySelector('#game-board');
    tablero.innerHTML = matriz.flat().map(valor => {
        if (valor === 1) {
            return '<div class="celda enemigo"><img src="assets/images/ghost.png" alt="Enemigo"></div>';
        }
        if (valor === 2) {
            return '<div class="celda padman"><img src="assets/images/pacman.png" alt="Padman"></div>';
        }
        return '<div class="celda vacia"></div>';
    }).join('');
}