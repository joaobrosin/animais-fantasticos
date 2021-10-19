/**
 * CEP validation
 */
const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000',
  '000' //null
]

for (cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

/**
 * CEP validation
 */
const regexpCPF = /(?:\d{3}[.-]?){3}\d{2}/g;

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000',
  '0000' // null
]

for (cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}

/**
 * CNPJ validation
 */
const regexpCNPJ = /\d{2}[.-]?(?:\d{3}[.-]?){2}[/]?\d{4}[.-]?\d{2}/g;

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
  '0000000000000' // null
]

for (cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}
