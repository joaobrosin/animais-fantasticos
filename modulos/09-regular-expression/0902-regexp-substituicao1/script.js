/**
 * Referência da Seleção
 * É possível utilizarmos o $& durante o momento
 * da substituição para fazermos
 * uma referência à seleção
 */

// Procura: Java
const regexp = /Java/g;
const string = 'PHP e Java são linguagens diferentes'.replace(regexp, '--$&--');
console.log(string);

/**
 * Grupo de captura
 * É possível definirmos diferentes grupos de captura,
 * que poderão ser referenciados durante a substituição. 
 * Basta envolvermos um grupo entre ( ) parênteses. 
 * A referência de cada grupo será feita com $n, sendo o primeiro $1.
 */

// Procura: sequência alfanumérica, seguida
// de @, seguido de alfanumérico ou .
// (obs: não usar esse regex para email, ele falha em alguns casos)

const regexp2 = /(\w+)@[\w.]+/g;
const string2 = 'andre@email.com.br'.replace(regexp2, '$1@gmail.com');
console.log(string2);

/**
 * Mais de um Grupo
 * Podemos definir quantos grupos de captura quisermos
 */

// Procura: sequência alfanumérica, seguida
// de, seguido espaço de sequência alfanumérica.

const regexp3 = /(\w+),\s(\w+)/g;
const string3 = 'Rafael, Andre'.replace(regexp3, '$2 $1');
console.log(string3);

/**
 * Mais do que Captura apenas
 * Um grupo também serve para agruparmos uma sequência de
 * caracteres que queremos em repetição
 */

// Procura: qualquer sequência de ta
const regexp4 = /(ta)+/gi;
const string4 = 'Tatata, tata, ta'.replace(regexp4, 'Pá');
console.log(string4);

/**
 * Positive Lookahead
 * Faz a seleção dos itens que possuírem o padrão
 * dentro de (?=) à sua frente.
 * Apesar de utilizar ( ) parênteses o positive lookahead
 * não captura grupo.
 */

// Procura: dígitos em sequência, que 
// Possuírem px, sem selecionar o px.
const regexp5 = /\d(?=px)/g;
const string5 = '2em, 4px, 5%, 2px, 1px'.replace(regexp5, 'X');
console.log(string5);

/**
 * Negative Lookahead
 * Faz a seleção dos itens não possuírem
 * o padrão dentro de (?!) à sua frente
 */

// Procura: dígitos que não possuírem px
// sem selecionar o restante.

const regexp6 = /\d(?!px)/g;
const string6 = '2em, 4px, 5%, 5px, 1px'.replace(regexp6, 'X');
console.log(string6);
