/**
 * Closure 
 * 
 * Recurso muito utilizado
 * 
 * * Forma que uma varável tem de lembrar de onde ela foi criada.
 * * Capacidade que o JS tem de isolar um contexto dentro de uma função.
 * * Clusure é parecido com conceito de classes, que também existem no JS, porém, 
 * * para conceito de programação funcional, não são muito utilizadas.
 */

 // mantendo contexto para contador declarando duas instâncias da função
function func1(initial) {
    let contador = initial

    // closure function
    return function() {
        contador++
        return contador   
    }
}
const func = func1(10) // instância 1
const funcB = func1(20) // instância 2
console.log(func()) 
console.log(func())
console.log(funcB())
console.log(funcB())


// saída
// 11
// 12
// 21
// 22


// "classe" animal que contém closure como espécide de "interface pública"
function animal(name) {
    let count = 0

    // closure function garente escopo de count oferecendo 
    // como se fosse métodos publicos manipulando e mantendo
    // estado de count 
    return {
        getCount: function() {
            return count
        },
        increment: function() {
            count++
        },
        getName: function() {
            return name
        }
    }
}

const gato = animal('gato')
gato.increment
console.log(gato.getCount(), gato.getName())

const cachorro = animal('cachorro')
cachorro.increment
console.log(cachorro.getCount(),cachorro.getName())