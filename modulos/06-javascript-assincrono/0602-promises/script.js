/**
 * Promises: then, catch, finally
 */

// const promesa = new Promise((resolve, reject) => {
//   let condicao = true;
  
//   if (condicao) {
//     setTimeout(() => {
//       resolve({nome: 'Andre', idade: 28});
      
//     }, 1000);
    
//   } else {
//     reject(Error('Um erro ocorreu na promise'));

//   }
// });

// const retorno = promesa
// .then(resolucao => {
//   resolucao.profissao = 'Designer';
//   return resolucao
// })
// .then(resolucao => {
//   console.log(resolucao)
// }, rejeitada => {
//   console.log(rejeitada)
// }).finally(() => {
//   console.log('Acabou')
// })

// console.log(retorno);

/**
 * Promise.all - mostra depois de todas resolvidas
 */

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('usuário logado')
//   }, 1000);
// })

// const dados = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('dados carregados')
//   }, 1500);
// })

// const carregouTudo = Promise.all([login, dados]);

// carregouTudo.then((resolucao) => {
//   console.log(resolucao)
// })


/**
 * Promise.race - ja mostra a primeira que for resolvida
 */

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('usuário logado')
  }, 1000);
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('dados carregados')
  }, 1500);
})

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})