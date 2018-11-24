/**
 * Assincronismo - Promisses
 */
function tempo(ms) {
    return new Promise((resolve, reject) => {

        // setTimeout(console.log('opa', ms)) 
        setTimeout(resolve, ms)

    })
}

// sem usar then
// tempo(2000)

// usando then
console.log('inicio')

tempo(2000)
    .then( () => console.log('opa') ) // poderia chamar outra promisse encavalando then evitando call back hell

console.log('fim')
// saida
// inicio
// fim
// opa