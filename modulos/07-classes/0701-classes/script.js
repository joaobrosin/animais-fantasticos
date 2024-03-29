/**
 * constructor function
 */
// function Button (text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element())

/**
 * Class - syntactical sugar
 */
// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//     // retornar o método não é ideal - perde o acesso a objeto
//     // return this.element(); 
//   }
//   // método 1
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     console.log(this)
//     return targetElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue', 'white');

// console.log(blueButton.appendTo('body'));


/**
 * static
 */

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
//   static createButton(text, background) {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const optionsBlue = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white'
// }

// const blueButton = new Button(optionsBlue)

// const blueButtonStatic = Button.createButton('Clique', 'blue')

// console.log(blueButtonStatic)


/**
 * 
 */
class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    console.log(this)
    return targetElement;
  }
  static blueButton (text) {
    return new Button(text, 'blue', 'white') 
  }
}

const botaoAzul = Button.blueButton('Comprar');

console.log(botaoAzul.element());