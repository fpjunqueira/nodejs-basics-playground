/**
 * Assincronismo - Callback
 */

const fs = require('fs')

// readdir recebe dir no primeiro parametro e função 
// callback no segundo parametro que será chamada
// com retorno e lista de paths
// por convensão erro é sempre primeiro parâmetro
fs.readdir('/home/fjunqueira',  function(err, lista){
    if (err) 
    {
        console.log(err)
    } else {
        console.log(lista)
    }
})