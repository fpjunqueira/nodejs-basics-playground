/**
 * Servidor node.js na porta 3000 sem utilizar express
 */
const http = require('http')
const server = http.createServer((req, res) => {
    res.end(`
    <html>
    <head>
        <title>Node PlayGround</title>
    </head>
    <body>
        <section>
            <h1>Node.js http-server</h1>
            <p>running...</p>
        </section>
    </body>
    `)
})
server.listen(3000)
