const formulario = document.querySelector('.form');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  iniciarPlacar();
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
