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
// const sobre = fetch('./sobre.html');
// const div = document.createElement('div');

// sobre
// .then(resolucao => resolucao.text())
// .then(body => {

//   div.innerHTML = body;
//   console.log(div)
// })


/**
 * fetch de imagem
 */
// const imagem = fetch('./imagem.png');

// imagem
// .then(resolucao => resolucao.blob())
// .then(body => {
//   const blobUrl = URL.createObjectURL(body);
//   const imagemDom = document.querySelector('img');
//   imagemDom.src = blobUrl;
// })


/**
 * json and text na mesma requisição
 */
// const cep = fetch('https://viacep.com.br/ws/81250200/json/');

// cep
// .then(resolucao => {
//   const resolucao2 = resolucao.clone();
  
//   resolucao.text().then((text) => {
//     console.log(text)
//   })
//   resolucao2.json().then((json) => {
//     console.log(json)
//   })

//   console.log(resolucao)

// })
// .then(body => {
//   console.log(body)
// })

/**
 * pegando headers e status
 */
// const cep = fetch('https://viacep.com.br/ws/81250200/json/');

// cep.then(response => {
//   response.headers.forEach(console.log)
//   console.log(response.status)
// })

/**
 * cors
 */
// const link = fetch('https://www.google.com');

// link.then(response => {
//   console.log(response)
// })