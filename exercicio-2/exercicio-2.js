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

  const divTec = criarElemento('div', { classList: 'tec', id: `tec${tecId}` });

  const h4Tec = criarElemento('h4', { innerText: 'Tecnologia' });

  const labelNome = criarElemento('label', {
    innerText: 'Nome',
    htmlFor: `cd-tec${tecId}-nome`,
  });
  const inputNome = criarElemento('input', {
    id: `cd-tec${tecId}-nome`,
    type: 'text',
    placeholder: 'HTML',
    required: '',
  });

  const h5Tec = criarElemento('h5', { innerText: 'Tempo de Experiência' });

  const divRadio1 = criarElemento('div', { classList: 'radio-container' });
  const inputRadio1 = criarElemento('input', {
    id: `cd-tec${tecId}-exp-op1`,
    type: 'radio',
    value: '1 a 2 Anos',
    name: `tec${tecId}-exp`,
    required: '',
  });
  const labelRadio1 = criarElemento('label', {
    innerText: '1 a 2 Anos',
    htmlFor: `cd-tec${tecId}-exp-op1`,
  });
  divRadio1.append(inputRadio1, labelRadio1);

  const divRadio2 = criarElemento('div', { classList: 'radio-container' });
  const inputRadio2 = criarElemento('input', {
    id: `cd-tec${tecId}-exp-op2`,
    type: 'radio',
    value: '3 a 4 Anos',
    name: `tec${tecId}-exp`,
    required: '',
  });
  const labelRadio2 = criarElemento('label', {
    innerText: '3 a 4 Anos',
    htmlFor: `cd-tec${tecId}-exp-op2`,
  });
  divRadio2.append(inputRadio2, labelRadio2);

  const divRadio3 = criarElemento('div', { classList: 'radio-container' });
  const inputRadio3 = criarElemento('input', {
    id: `cd-tec${tecId}-exp-op3`,
    type: 'radio',
    value: 'Mais de 5 Anos',
    name: `tec${tecId}-exp`,
    required: '',
  });
  const labelRadio3 = criarElemento('label', {
    innerText: 'Mais de 5 Anos',
    htmlFor: `cd-tec${tecId}-exp-op3`,
  });
  divRadio3.append(inputRadio3, labelRadio3);

  const botaoRmv = criarElemento('button', {
    classList: 'btn-rmv',
    id: `btn-rmv-tec${tecId}`,
    type: 'button',
    innerText: 'Remover Tecnologia',
  });

  divTec.append(
    h4Tec,
    labelNome,
    inputNome,
    h5Tec,
    divRadio1,
    divRadio2,
    divRadio3,
    botaoRmv,
  );

  tecContainer.append(divTec);

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
