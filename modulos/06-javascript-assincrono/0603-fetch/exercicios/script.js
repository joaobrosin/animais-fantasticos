/**
 * Utilizando a API https://viacep.com.br/ws/${CEP}/json/
 * crie um formulário onde o usuário pode digitar o cep
 * e o endereço completo é retornado ao completar o cep
 */
const cepInput = document.querySelector('#cep');
cepInput.addEventListener('change', () => {
  buscaCep(cepInput.value);
})

function buscaCep (cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(resolucao => resolucao.json())
  .then((body) => {
    document.querySelector('#logradouro').value = body.logradouro;
    document.querySelector('#bairro').value = body.bairro;
    document.querySelector('#cidade').value = body.localidade;
    document.querySelector('#uf').value = body.uf;
  })
}

/**
 * Utilizando a API https://blockchain.info/ticker
 * retorno no DOM o valor de compra da bitcoin em reais.
 * Atualize este valor a cada 30 segundos
 */

/**
 * Utilizando a API https://api.chucknorris.io/jokes/random
 * retorne uma piada randomica do chucknorris, toda vez que
 * clicar em próxima
 */