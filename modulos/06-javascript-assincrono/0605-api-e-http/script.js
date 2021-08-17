/**
 * fetch method GET
 */
// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(res => res.json())
// .then(pokemon => {
//   console.log(pokemon)
// })

/**
 * fetch method POST
 */
// const url = "https://jsonplaceholder.typicode.com/posts";
// const options = {
//   method: "POST",
//   body: '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8"
//   } 
// }

// fetch(url, options)
// .then(res => res.json())
// .then(json => console.log(json))

/**
 * fetch method HEAD - para capturar headers
 */
// const url = "https://jsonplaceholder.typicode.com/posts";
// const options = {
//   method: "HEAD",
// }

// fetch(url, options)
// .then(res => res.headers.forEach(console.log))

/**
 * fetch method PUT - atualizar informações
 */
// const url = "https://jsonplaceholder.typicode.com/posts/2";
// const options = {
//   method: "PUT",
//   body: '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8"
//   } 
// }

// fetch(url, options)
// .then(res => res.json())
// .then(json => console.log(json))

/**
 * fetch method GET - capturando cors
 */
fetch('https://google.com')
.then(res => res.text())
.then(text => {
  console.log(text)
})
