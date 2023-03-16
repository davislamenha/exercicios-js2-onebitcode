// ADCIONAR TECNOLOGIA
const btnAdcTec = document.querySelector('.btn-adc');

btnAdcTec.addEventListener('click', adicionarTec);

function adicionarTec() {
  const tecContainer = document.querySelector('.form1-tec-container');
  const qtdDeTec = document.querySelectorAll('.tec').length;
  let tecId = qtdDeTec > 0 ? qtdDeTec + 1 : 1;

  tecContainer.innerHTML += `
  <div class="tec" id="tec${tecId}">
  <h4>Tecnologia ${tecId}</h4>
  <label for="cd-tec${tecId}-nome">Nome</label>
  <input id="cd-tec${tecId}-nome" type="text" placeholder="HTML" required>
  <p>Tempo de Experiência</p>
  <div class="radio-container">
    <input id="cd-tec${tecId}-exp-op${tecId}" type="radio" name="tec${tecId}-exp" value="1 a 2 Anos" required>
    <label for="cd-tec${tecId}-exp-op${tecId}">${tecId} a 2 Anos</label>
  </div>
  <div class="radio-container">
    <input id="cd-tec${tecId}-exp-op2" type="radio" name="tec${tecId}-exp" value="3 a 4 Anos" required>
    <label for="cd-tec${tecId}-exp-op2">3 a 4 Anos</label>
  </div>
  <div class="radio-container">
    <input id="cd-tec${tecId}-exp-op3" type="radio" name="tec${tecId}-exp" value="Mais de 5 Anos" required>
    <label for="cd-tec${tecId}-exp-op3">Mais de 5 Anos</label>
  </div>
  <button class="btn-rmv" type="button">Remover Tecnologia</button>
</div>
  `;

  atualizarBtnRmv();
}

// REMOVER TECNOLOGIA
function atualizarBtnRmv() {
  const btnRmvTec = document.querySelector('.btn-rmv');

  btnRmvTec.addEventListener('click', removerTec);
}

function removerTec() {
  this.parentNode.remove();
}
