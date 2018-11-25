/**
 * bind cria um novo contexto injetando a variavel path
 * para ser logada no callback de readdir que é uma função
 * referenciada.
 */
const fs = require('fs')
const path = './'

fs.readdir(path, ver.bind(null, path))
fs.readdir(path, (err, success) => ver('', err, success))
// passando como referência caso não fosse necessário logar path
// fs,readdir(path, ver) 

function ver(caminho, err, success) {
    console.log('listing path', caminho)
    if (err) {
        console.log(err)
    } else {
        console.log(success)
    }
}