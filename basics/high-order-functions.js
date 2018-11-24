/**
 * HOF
 * 
 * Funções que recebem outras funções 
 */
function hof(acao) {
    acao()
}
hof(() => console.log('HOF'))

// HOF clássicas

// mapeia de um valor para outro
const valores = [1, 2, 3, 4]
const dobro = valores.map( valor => valor * 2 ) 

// trabalha em cada valor para fazer qualquer coisa
valores.forEach( valor => console.log( valor ))

// reduce (reuzir a alguma coisa) recebe valor anterior, atual e inicial
const soma = valores.reduce( (prev, curr) => prev + curr )
// saída
// 10

// chain (encadear ou cascatear)
const somaDoDobro =  valores
                        .map( valor => valor * 2 ) 
                        .reduce( (prev, curr) => prev + curr )

// filter -> valor entra se retornar true
const filterNumerosPares = valores
                    .filter( valor => valor % 2 === 0 )

// passando funções para chain
const dobroF = valor => valor * 2
const paresF = valor => valor % 2 === 0
const somarF = (num1, num2) => num1 + num2

const somaDobroValoresPares = valores
                .filter( paresF ) // filtra pares
                .map( dobroF ) // faz dobro
                .reduce( somarF, 0 ) // soma resultado do vetor