/**
 * C Like
 */

let b = 20 // int
b = 1.0 // float
let name = 'Felipe'

// objeto
const c = { 
    value: 10,
    obj: {
        a: 1
    }
}
c.value = 20

// pegando valores do objeto
let d = c.value
// ou
let d2 = c.obj.a
// ou
let d3 = c['obj']['a']
// ou
let key = 'obj'
let d4 = c[key]['a']

// array
let vetor = [1,2,3]
console.log(vetor[0])

let funcao = function(func) {
    console.log('de dentro da funcao')
}
let funcaoCopia = funcao
funcaoCopia()


// ou
let funcao2 = function(func) {
    func('de dentro da funcao')
}
let funcaoCopia2 = funcao2
funcaoCopia(console.log)