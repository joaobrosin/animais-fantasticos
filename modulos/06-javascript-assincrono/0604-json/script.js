/**
 * capturando JSON com método res.json()
 */
// fetch('./dados.json')
// .then(res => res.json())
// .then(json => {
//   json.forEach(materia => {
//     console.log(materia.aula)
//   })
// })

/**
 * capturando JSON com método res.text() - método antigo
 */
// fetch('./dados.json')
// .then(res => res.text())
// .then(jsonText => {
//   console.log(jsonText);
//   const jsonFinal = JSON.parse(jsonText);
//   console.log(jsonFinal);
// });

/**
 * transformar objeto em string
 */
// const configuracoes = {
//   player: "Google",
//   tempo: 25.5,
//   aula: "2.1 JavaScript"
// }
// const stringConfig = JSON.stringify(configuracoes);
// console.log(stringConfig);

/**
 * enviando várias configs para LocalStorage com objetos json
 */
const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript"
}
localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));


