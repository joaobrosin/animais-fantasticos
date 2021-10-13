/**
 * Caracteres especiais precisam ser escapados
 * lista de caracteres especiais:
 * 
 * +*?^$\.[]{}()|/
 */

// Procura todos os pontos
const regexp = /\./g;
const regexpAlternativa = /[.]/g;

const string = '999.222.222.11'.replace(regexp, '-');
console.log(string);

/**
 * Word
 * o \w irá selecionar qualquer caracter alfanumérico e o underline.
 * É a mesma coisa que [A-Za-z0-9_]
 */

// Procura: todos os alfanuméricos
const regexp2 = /\w/g;
const string2 = 'Guarda-chuva R$ 23,00.'.replace(regexp2, '-');
console.log(string2);

/**
 * Quantificador
 * É possível selecionar caracteres seguidos, como /bbb/g irá
 * selecionar apenas bbb. COm as chaves podemos indicar a
 * repetição /b{3}/g. Agora ele está fazendo uma seleção completa
 * e não caracter por caracter.
 */

// Procura: 4 a's seguidos
const regexp3 = /aaa/g;
const regexp3Alt = /a{3}/g;

const string3 = 'Vaaai ali por favor.'.replace(regexp3Alt, 'a');
console.log(string3);

/**
 * Quantificador Min e Max
 * Podemos informar o min e max do quantificador /a{2,4}/
 * vai selecionar quando aparecer a duas vezes ou até 4 vezes.
 * /a{2,}/ irá selecionar quando se repetir duas ou mais vezes
 */

// Procura: dígitos seguidos de 2 à 3
const regexp4 = /\d{2,3}/g;

const string4 = '222.333.222.42'.replace(regexp, 'X');
console.log(string4);

// Procura: letras seguidas com 1 caracter ou mais
const regexp5 = /\w{1,}/g;
const string5 = 'A melhor linguagem é JavaScript'.replace(regexp5, 'X');
console.log(string5);

/**
 * Opcional
 * O sinal ? significa que o caracter é opcional
 * pode ou não existir
 */

// Procura: Por regex com p opcional
const regexp6 = /regexp?/g;
const string6 = 'Qual é o certo, regexp ou regex'.replace(regexp6, 'Regular expression');
console.log(string6);

/**
 * Word Boundary \b
 * O sinal \b irá indicar que pretendemos fazer uma seleção que
 * deve ter início e fim de não caracteres \w.
 */

// Procura: java (case insensitive)
const regexp7 = /java/gi;
const string7 = 'Java não é JavaScript'.replace(regexp7, 'X');
console.log(string7);

// Procura: java (case insensitive)
const regexp8 = /\bjava\b/gi;
const string8 = 'Java não é JavaScript'.replace(regexp8, 'X');
console.log(string8);

// Procura: Dígitos em sequência, que estejam isolados
const regexp9 = /\b\d+\b/gi;
const string9 = 'O restaurante25 na Rua 3, Custa R$ 32,00'.replace(regexp9, 'X');
console.log(string9);

/**
 * Not a Word Boundary \B
 * É o contrário do \b
 */
const regexp10 = /\B\d+\B/gi;
const string10 = '11_22 33-44 55é66 77e88'.replace(regexp10, 'X');
console.log(string10);
