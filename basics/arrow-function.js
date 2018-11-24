/**
 * f = function(a, b, c) {}
 * 
 * function f() {a, b, c}
 * 
 * () => {} 
 */

const falar = function(palavra) {
    console.log(palavra)
}
falar('opa')

// não cria um contexto e acessa contexto global
const somar = (num1, num2) => num1 + num2
somar(1, 2)

// também não cria contexto e vai depender do contexto do pai
const media = (num1, num2) => {
    return (num1 + num2) / 2
}
console.log(media(2, 4))

// função anônima, passando função como parâmetro
// injeção de comportamento
const animal = (nome, grunido) => nome  + ' ' + grunido()
console.log(animal('cachorro', () => 'latir'))