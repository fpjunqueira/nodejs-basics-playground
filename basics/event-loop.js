/**
 * Saída deve ser 
 * 1
 * 2
 * 3
 * ola fullstack callback
 * 
 * Função callback foi colocada em pilha paralela
 * e foi excutada após conclusão da pilha principal
 * 
 * Obs: Utilizar sempre opção por versão assíncrona das funções do JS 
 * para utilizar o event-loop sem bloquear o event principal 
 * (que poderia travar a tela, por exemplo)
 */
console.log(1)

function callback() {
    console.log('ola fullstack callback')
}

setTimeout(callback, 0)
console.log(2)
console.log(3)