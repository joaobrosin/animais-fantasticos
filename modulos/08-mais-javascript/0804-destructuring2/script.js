// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { backgroundColor, margin, color } = btnStyles;

console.log(backgroundColor); // rgb(255, 99, 71)
console.log(margin); // 0px
console.log(color); // rgb(0, 0, 0)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[ cursoAtivo, cursoInativo ] = [ cursoInativo, cursoAtivo ];

console.log(cursoAtivo) // HTML
console.log(cursoInativo) // JavaScript

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const { cor: bobCor } = cachorro;

console.log(bobCor) // Amarelo
console.log(cor) // error: not defined
