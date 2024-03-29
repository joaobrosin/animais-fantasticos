const button = {
  get tamanho () {
    return this._numero || 100;
  },
  set tamanho (novoValor) {
    this._numero = novoValor;
  }
}

const frutas = {
  lista: [],
  set novaFruta(fruta) {
    this.lista.push(fruta);
  }
}

frutas.novaFruta = "banana";
frutas.novaFruta = "maçã";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button'
    const buttonElement = document.createElement(type);
    buttonElement.innerHTML = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');