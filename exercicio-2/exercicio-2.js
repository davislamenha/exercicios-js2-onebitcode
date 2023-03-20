const form1 = document.getElementById('form-1');

form1.addEventListener('submit', cadastrarDev);

function cadastrarDev(e) {
  e.preventDefault();
  const nome = document.getElementById('cd-nome');
  const tecContainer = document.querySelector('.form1-tec-container');
  const tecnologias = pegarTecnologias();
  const devContainer = document.querySelector('.devs-cadastrados-container');

  devContainer.innerHTML += `
  <div class="dev">
  <p>Nome: <span class="dev-nome">${nome.value}</span></p>
  <h3>Tecnologias</h3>
  <div class="dev-tecs"> 
    ${inserirTecnologias(tecnologias)}
  </div>
</div>
  `;

  nome.value = '';
  tecContainer.innerHTML = '';
}

function pegarTecnologias() {
  let tecArray = [];
  const tecnologias = document.querySelectorAll('.tec');
  tecnologias.forEach((tecnologia) => {
    const id = tecnologia.id;
    const tecNome = document.getElementById(`cd-${id}-nome`).value;
    const tecExp = document.querySelector(
      `input[name="${id}-exp"]:checked`,
    ).value;
    tecArray.push({ nome: tecNome, experiencia: tecExp });
  });
  return tecArray;
}

function inserirTecnologias(tecnologiasArray) {
  let tecnologiasString = '';
  for (let i = 0; i < tecnologiasArray.length; i++) {
    const tecnologia = tecnologiasArray[i];
    tecnologiasString += `<p class="tec-nome">${tecnologia.nome}<span class="tec-exp">${tecnologia.experiencia}</span></p>`;
  }
  return tecnologiasString;
}

// ADCIONAR TECNOLOGIA
const btnAdcTec = document.querySelector('.btn-adc');

btnAdcTec.addEventListener('click', adicionarTec);

function adicionarTec() {
  const tecContainer = document.querySelector('.form1-tec-container');
  const qtdDeTec = document.querySelectorAll('.tec').length;
  let tecId = qtdDeTec > 0 ? qtdDeTec + 1 : 1;

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

// CRIAR ELEMENTOS

function criarElemento(elemento, atributos) {
  const el = document.createElement(elemento);
  for (const atributo in atributos) {
    el[atributo] = atributos[atributo];
  }
  return el;
}
