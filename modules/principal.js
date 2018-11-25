// módulo criado
const module1 = require('./module')

console.log(module1.a, module1.var1)
module1.falar()

// módulo terceiro
const uuid = require('uuid/v4')
console.log('UUID', uuid())