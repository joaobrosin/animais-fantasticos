/**
 * Reescreva a função utilizando
 * valores iniciais de parâmetros com ES6
 */
function createButton (background, color) {
  background = background || 'blue';
  if (color === undefined) {
    color = 'red';
  }

  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton();
console.log(redButton)

// resolução:
function createButtonRes (background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButtonRes = createButtonRes();
console.log(redButtonRes)

/**
 * Utilize o método push para inserir as frutas ao
 * final de comidas
 */
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

// resolução:
comidas.push(...frutas);
console.log(comidas);
