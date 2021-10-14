/**
 * Anchor Beginning
 * Com o ^ é possível informar que a busca deve
 * ser iniciada no início da linha
 */

//Procura: sequência de alfanuméricos
// no início da linha

const regexp = /^\w+/g;
const string = `andre@origamid.com
contato@origamid.com`.replace(regexp, 'X');
console.log(string);

/**
 * Anchor End
 * Com o $ é possível informar que a busca deve ser 
 * iniciada no final da linha
 */

// Procura: sequência de alfanuméricos
// no final da linha.
// "gm" deixa global (pega tudo) e multiline (todas linhas)

const regexp2 = /\w+$/gm;
const string2 = `andre@origamid.com
contato@origamid.com`.replace(regexp2, 'X');
console.log(string2);

/**
 * Line Feed \n
 * O \n irá selecionar o final de uma linha, quando criamos uma nova.
 */
const regexp3 = /\n/g;
const string3 = `andre@origamid.com
contato@origamid.com`.replace(regexp3, '---');
console.log(string3);

/**
 * Unicode \u
 * O \u irá selecionar o respectivo caracter unicode,
 * de acordo com o código passado em \uXXXX. 
 * Ex. \u0040 seleciona o @
 */

// Procura: @ ou ©
const regexp4 = /\u0040|\u00A9/g;
const string4 = 'andre@origamid.com ©'.replace(regexp4, '---');
console.log(string4);
