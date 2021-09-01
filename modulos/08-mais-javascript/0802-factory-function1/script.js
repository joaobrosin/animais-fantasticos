// function createButton (text) {
//   function element () {
//     const buttonElement = document.createElement('button')
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return Object.freeze({
//     text,
//     element
//   });
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'novo texto' // com Object.freeze não consegue mudar o valor da variável

// console.log(btnComprar, btnVender)

function Pessoa(nome) {
  if(!(this instanceof Pessoa)) {
    return new Pessoa(nome)
  }
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
}

const designer = Pessoa('André');

console.log(designer)