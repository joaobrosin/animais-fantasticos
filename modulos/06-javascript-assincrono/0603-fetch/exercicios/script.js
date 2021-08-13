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
 * retorne no DOM o valor de compra da bitcoin em reais.
 * Atualize este valor a cada 30 segundos
 */
const bitcoinValue = document.querySelector(".bitcoin-value");

// setInterval(() => {
//   getBitcoinValue();
// }, 30000);

function getBitcoinValue () {
  fetch("https://blockchain.info/ticker")
  .then(res => res.json())
  .then((body) => {
    bitcoinValue.innerHTML = `R$ ${body.BRL.buy}`.replace('.',',');
    console.log(`Valor do bitcoin agora: R$ ${body.BRL.buy}`.replace('.', ','));
  })
}
getBitcoinValue();

/**
 * Utilizando a API https://api.chucknorris.io/jokes/random
 * retorne uma piada randomica do chucknorris, toda vez que
 * clicar em próxima
 */
const jokeBox = document.querySelector(".joke-box");
const nextJoke = document.querySelector(".next-joke");

nextJoke.addEventListener("click", getNextJoke);

function getNextJoke () {
  fetch("https://api.chucknorris.io/jokes/random")
  .then(res => res.json())
  .then(body => {
    jokeBox.innerHTML = body.value
  })
}
getNextJoke();