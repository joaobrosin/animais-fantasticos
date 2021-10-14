/**
 * Regular expression
 * Regexp ou Regex são empressões utilizadas
 * para realizarmos buscas / substituições de padrões
 * em strings.
 * 
 * Os padrões devem ser colocados entre "//".
 * Geralmente vamos utilizá-las nos métodos 
 * .replace() e .split()
 */

// Procura: a
const padrãoRegexp = /J/;
const texto = 'JavaScript';

const novoTexto = texto.replace(padrãoRegexp, 'B');
console.log(novoTexto) // BavaScript

// Busca por itens de a à z 
// (o g significa global, pega todos elementos, não só o primeiro)
const regex2 = /[a-z]/g

'JavaScript é a linguagem.'.replace(regex2, '0');
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
const regex3 = /[a-zA-Z]/g;

'JavaScript é a linguagem.'.replace(regex3, '1');
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
const regexNumero = /[0-9]/;

'123.333.333-333'.replace(regexNumero, 'X');
// XXX.XXX.XXX-XX