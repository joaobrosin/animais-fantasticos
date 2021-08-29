class Veiculo {
  constructor (rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar () {
    console.log('Acelerou');
  }
}

/**
 * A subclasse pode utilizar a classe como base
 * Como por exemplo a subclasse "Moto", utilizando 
 * a Classe "Veículo"
 */
class Moto extends Veiculo {
  constructor (rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar () {
    // super - faz o retorno utilizar os dois métodos, tanto da classe quanto da subclasse
    super.acelerar(); 
    console.log('Acelerou rápido (moto)')
  }
  empinar () {
    console.log("Moto empinou com " + this.rodas + " rodas")
  }
}

const honda = new Moto(2, 'Gasolina', true);
const civic = new Veiculo(4);