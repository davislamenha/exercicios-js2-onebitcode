const formulario = document.querySelector('.form');
const tabuleiro = document.querySelector('.board');
const casasDoTabuleiro = document.querySelectorAll('.board-item');
const botaoResetar = document.querySelector('.btn-reset-score');
const combinacoesVencedor = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
];

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  iniciarPlacar();
  iniciarJogo();
});

botaoResetar.addEventListener('click', () => {
  alert('Jogo Resetado!');
  resetarTabuleiro();
  const player1Placar = document.querySelector('.score-player-1');
  const player2Placar = document.querySelector('.score-player-2');

  player1Placar.innerText = 0;
  player2Placar.innerText = 0;
});

function iniciarPlacar() {
  const placar = document.querySelector('.score');
  const player1Nome = document.getElementById('player-1-name').value;
  const player2Nome = document.getElementById('player-2-name').value;

  const nomePlacar1 = document.querySelector('.score-player-1-name');
  const nomePlacar2 = document.querySelector('.score-player-2-name');

  nomePlacar1.innerText = player1Nome;
  nomePlacar2.innerText = player2Nome;

  formulario.style.display = 'none';
  placar.style.display = 'flex';
}

function iniciarJogo() {
  tabuleiro.dataset.start = 'on';
  if (tabuleiro.dataset.start === 'on')
    casasDoTabuleiro.forEach((casa) => {
      casa.addEventListener('click', function () {
        if (tabuleiro.dataset.turn === '1' && this.innerText === '') {
          this.innerText = 'O';
          tabuleiro.dataset.turn = '2';
          verificarVencedorOuEmpate();
        } else if (tabuleiro.dataset.turn === '2' && this.innerText === '') {
          this.innerText = 'X';
          tabuleiro.dataset.turn = '1';
          verificarVencedorOuEmpate();
        } else alert('Esta casa já está marcada!');
      });
    });
}

function verificarVencedorOuEmpate() {
  combinacoesVencedor.forEach((combinacao) => {
    const player1Placar = document.querySelector('.score-player-1');
    const player1Nome = document.querySelector(
      '.score-player-1-name',
    ).innerText;
    const player2Placar = document.querySelector('.score-player-2');
    const player2Nome = document.querySelector(
      '.score-player-2-name',
    ).innerText;

    let player1 = 0;
    let player2 = 0;
    let empate = 0;

    combinacao.forEach((numeroDaCasa) => {
      const casa = document.querySelector(
        `[data-board="${numeroDaCasa}"]`,
      ).innerText;
      if (casa === 'O') {
        player1++;
      } else if (casa === 'X') {
        player2++;
      }
    });

    if (player1 === 3) {
      player1Placar.innerText = +player1Placar.innerText + 1;
      alert(`${player1Nome} Ganhou!`);
      resetarTabuleiro();
    } else if (player2 === 3) {
      player2Placar.innerText = +player2Placar.innerText + 1;
      alert(`${player2Nome} Ganhou!`);
      resetarTabuleiro();
    } else {
      casasDoTabuleiro.forEach((casa) => {
        if (!casa.innerText) empate++;
      });
      if (empate === 0) {
        alert('Jogo empatado!');
        resetarTabuleiro();
      }
    }
    player1 = 0;
    player2 = 0;
    empate = 0;
  });
}

function resetarTabuleiro() {
  casasDoTabuleiro.forEach((casa) => {
    casa.innerText = '';
  });
}
