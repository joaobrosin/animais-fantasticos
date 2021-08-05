/**
 * fetch doc.txt
 */
// const doc = fetch('./doc.txt');

// doc
// .then(resolucao => resolucao.text())
// .then(body => {
// console.log(body)
// })

/**
 * fetch API cep
 */
// const cep = fetch('https://viacep.com.br/ws/81250200/json/');

// cep
// .then(resolucao => resolucao.json())
// .then(body => {
//   const conteudo = document.querySelector('.conteudo');

//   conteudo.innerText = body.logradouro

// })

/**
 * fetch CSS
 */
// const css = fetch('./style.css');

// css
// .then(resolucao => resolucao.text())
// .then(body => {
//   const conteudo = document.querySelector('.conteudo');
//   const style = document.createElement('style');

//   style.innerHTML = body;
//   conteudo.appendChild(style);

// })


/**
 * fetch página sobre
 */
const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre
.then(resolucao => resolucao.text())
.then(body => {

  div.innerHTML = body;
  console.log(div)
})