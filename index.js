const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('home requested', req.query, new Date().getTime())
    res.send('<h1>Noje.js Playground</h1>')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})