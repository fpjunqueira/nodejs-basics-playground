/**
 * Calcular horas trabalhadas no dia somando períodos de entrada e saída. 
 * 
 * $ node moment.js '2018-11-30T08:00:00' '2018-11-30T12:00:00'
 */
const moment = require('moment');
const dateFormat = 'DD/MM/YYYY HH:mm:ss';

const args = process.argv.slice(2)
const ini = args[0]
const end = args[1]

console.log('Date now:', moment().format(dateFormat))
console.log('Arrived at:', ini)
console.log('Departure at:', end)

var inMoment = moment(ini);
var outMoment = moment(end);

const diff = outMoment.diff(inMoment, 'minutes')

let m = 0
let h = 0

if (diff < 60) {
    m = diff
} else {
    if (diff % 60) {
        let diffH = 0 
        for (let m = 60; m < diff; m+=60) {
            diffH++
        }
        m = diff - (diffH * 60)
        h = diffH
    } else {
        h = diff / 60
    }
}

console.log(`${h} hours and ${m} minutes`)