
/**
 * global scope >> var
 * local scope >> const, let
 * 
 * local scope é definido por {}
 */

function testeEscopo() {
    // local scope #1
    const var0 = 20
    function outroTeste() {
        // scope #2
        const var1 = 10
        console.log(var0, var1)
    }
    if (var0 === 20) {
        // scope #3
        const scop3 = 1122
    }
    console.log(scope3) // => erro
    for (let i=0; i<10; i++) {
        // scope #4
        console.log(i)
    }
    outroTeste()
}

// outroTeste() // => erro ao acessar função fora de seu escopo