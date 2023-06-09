const form1 = document.getElementById('form-1');

form1.addEventListener('submit', escalarJogador);

function escalarJogador(e) {
  e.preventDefault();
  const nome = document.getElementById('et-nome');
  const posicao = document.getElementById('et-posicao');
  const camisa = document.getElementById('et-camisa');

  if (confimarJogador(nome.value, posicao.value, camisa.value)) {
    adicionarJogador(nome, posicao, camisa);
    limparCampos([nome, posicao, camisa]);
  } else alert('Operação cancelada!');
}

function confimarJogador(nome, posicao, camisa) {
  return confirm(`
  Confirme as informações do jogador:
   
  Nome: ${nome}
  Posição: ${posicao}
  Número da Camisa: ${camisa}
`);
}

function adicionarJogador(nome, posicao, camisa) {
  const corpoDaTabela = document
    .getElementById('tabela-escalacao')
    .getElementsByTagName('tbody')[0];
  const novaLinha = corpoDaTabela.insertRow();
  novaLinha.id = `camisa-${camisa.value}`;
  let td1 = novaLinha.insertCell();
  td1.innerHTML = nome.value;
  let td2 = novaLinha.insertCell();
  td2.innerHTML = posicao.value;
  let td3 = novaLinha.insertCell();
  td3.innerHTML = camisa.value;
}

function limparCampos(campos) {
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    campo.value = '';
  }
}

const form2 = document.getElementById('form-2');

form2.addEventListener('submit', removerJogador);

function removerJogador(e) {
  e.preventDefault();
  const camisa = document.getElementById('et-camisa-2');
  removerLinha(camisa);
}

function removerLinha(camisa) {
  const linha = document.getElementById(`camisa-${camisa.value}`);
  if (linha) {
    if (
      confimarJogador(
        linha.childNodes[0].innerText,
        linha.childNodes[1].innerText,
        linha.childNodes[2].innerText,
      )
    ) {
      linha.remove();
      limparCampos([camisa]);
    } else alert('Operação cancelada!');
  } else alert(`A camisa ${camisa.value} ainda não foi escalada!`);
}
