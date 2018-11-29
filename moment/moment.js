/**
 * Calcular horas trabalhadas no dia somando períodos de entrada e saída.
 */
var moment = require('moment');

const args = process.argv.slice(2)

console.log('Hello:', args[0], args[1], 'Date now:', moment().format('DD/MM/YYYY HH:mm:ss'));

