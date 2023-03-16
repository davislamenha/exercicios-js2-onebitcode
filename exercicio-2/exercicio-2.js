const form1 = document.getElementById('form-1');

form1.addEventListener('submit', cadastrarDev);

function cadastrarDev(e) {
  e.preventDefault();
  const nome = document.getElementById('cd-nome');
}

function adcionarDev() {}

function limparCampos(campos) {
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    campo.value = '';
  }
}

// ADCIONAR TECNOLOGIA
const btnAdcTec = document.querySelector('.btn-adc');

btnAdcTec.addEventListener('click', adicionarTec);

function adicionarTec() {
  const tecContainer = document.querySelector('.form1-tec-container');
  const qtdDeTec = document.querySelectorAll('.tec').length;
  let tecId = qtdDeTec > 0 ? qtdDeTec + 1 : 1;

  tecContainer.innerHTML += `
  <div class="tec" id="tec${tecId}">
  <h4>Tecnologia</h4>
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
  <button class="btn-rmv" id="btn-rmv-tec${tecId}" type="button">Remover Tecnologia</button>
</div>
  `;

  atualizarBtnRmv();
}

// REMOVER TECNOLOGIA
function atualizarBtnRmv() {
  const btnRmvTec = document.querySelectorAll('.btn-rmv');

  btnRmvTec.forEach((btn) => {
    btn.addEventListener('click', removerTec);
  });
}

function removerTec() {
  const tecId = this.id.replace('btn-rmv-', '');
  const tecnologia = document.getElementById(`${tecId}`);
  tecnologia.remove();
}
