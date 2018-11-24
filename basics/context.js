
/**
 * context == this
 * 
 * * Em escopo global retorna vazio no caso do note ou window no browser
 * 
 * OBS: Em programação funcional não é utilizado muito o this para não 
 * depender de contexto externo.
 * 
 * No node, this é evitado para não fazer confusão de contexto, sendo o 
 * this mais utilizado no browser. Quando é necessário ligar com variáveis
 * de contexto, optar por passar como parâmetro ou construtor para o 
 * código ficar mais funcional.
 */

const obj = {
    var1: 10,
    // acessando variável de contexto externo
    get: function() {
        return this.var1
    }
}
console.log(obj.get())

/**
 * manipulando context 
 * 
 * será criado nova variável para novo contexto para acessar 
 * var1 que está em contexto dentro de obj. Dessa forma é possível
 * settar o valor de var1
 */
console.log(obj.get.bind({ var1: 20})())