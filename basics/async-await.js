/**
 * Async/Await
 * 
 * async é usado para fazer chamadas internas a uma Promisse sem travar a stack principal
 * deve ser colocar um await na chamada da promisse em em seguida é possível executar 
 * o código que seria executado na função 'then' de retorno da Promisse trazendo um código 
 * linear
 */

// Promisse
function tempo(ms) {
    return new Promise((resolve, reject) => { 
        setTimeout( () => resolve(ms), ms)
    })
}

async function ola() {
    // código síncrono com cara de assíncrono
    // espera terminar 
    const ms = await tempo(2000)
    console.log('terminou', ms)
}
 
// chama console.log sem travar acima
console.log(ola())