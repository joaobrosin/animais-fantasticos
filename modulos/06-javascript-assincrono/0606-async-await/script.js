/**
 * Função não espera promise ser resolvida
 */
// async function puxarDados () {
//   const responseDados = fetch("./dados.json");

//   console.log(responseDados);
// }
// puxarDados();

/**
 * Função com await irá esperar a promise ser resolvida
 */
// async function puxarDados2 () {
//   const responseDados = await fetch("./dados.json");

//   console.log(responseDados);
// }
// puxarDados2();

/**
 * Função tbm espera a promise ser resolvida
 * tanto no fetch quanto no método json()
 */
// async function puxarDados3 () {
//   const responseDados = await fetch("./dados.json");
//   const jsonDados = await responseDados.json();

//   document.body.innerText = jsonDados.aula;
//   console.log(jsonDados.aula);
// }
// puxarDados3();

/**
 * o async await é do ES8, lançado em 2017
 * é uma forma de não precisar utilizar o .then e .catch
 * quando for capturar imformações de uma promise
 */

/**
 * Para capturar erros com async await utilizar try / catch
 */
// async function puxarDados4 () {
//   try {
//     const dadosResponde = await fetch('./dados.json');
//     const dadosJSON = await dadosResponde.json();
//     console.log(dadosJSON.aula);
//   }
//   catch (erro) {
//     console.log(erro)
//   }
// }
// puxarDados4();

/**
 * Iniciar Fetch ao mesmo tempo
 */
// async function puxarDados5 () {
//   const responseDados = fetch('./dados.json');
//   const responseClientes = fetch('./clientes.json');

//   const jsonDados = await (await responseDados).json();
//   const jsonClientes = await (await responseClientes).json();

//   console.log(jsonDados);
//   console.log(jsonClientes);
// }
// puxarDados5();

/**
 * async só funciona com promise, sem promise não irá funcionar
 * ele não vai esperar o settimeout ser 
 * finalizado para fazer a próxima linha
 * ou seja:
 * AWAIT SÓ FUNCIONA COM PROMISES
 */
// async function asyncSemPromise () {
//   // console não irá esperar.
//   await setTimeout(() => console.log('primeiro console do código'), 1000);
//   console.log('segundo console do código')
// }
// asyncSemPromise();

/**
 * Para o código anterior funcionar, precisa transformar o setTimeOut
 * em uma promise:
 */
 async function asyncComPromise () {
  await new Promise(resolve => {
    setTimeout(() =>  {
      console.log('primeiro console do código')
      resolve();
    }, 1000);
  })
  console.log('segundo console do código')
}
asyncComPromise();
