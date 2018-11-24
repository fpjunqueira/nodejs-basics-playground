/**
 * Promisses, async/await e try/catch block
 * 
 * código para ler um diretório e printar arquivos usando try/catch
 */

const fs = require('fs')

function readDir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, lista) {
            if (err) {
                reject(err)
            } else {
                resolve(lista)
            }                
        })
    })
}

async function imprimeListaDir() {
    try {
        const lista = await readDir('./')
        console.log(lista)
    } catch(err) {
        console.log('erro ao listar arquivos', err)
    } 
}

console.log(imprimeListaDir())