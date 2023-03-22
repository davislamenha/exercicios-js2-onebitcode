const formulario = document.querySelector('.form');
const tabuleiro = document.querySelector('.board');
const casasDoTabuleiro = document.querySelectorAll('.board-item');
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
