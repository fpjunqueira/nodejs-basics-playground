## Modules

**Módulos do Projeto**

Criar módulo:

```
module.exports = {
    a: 1,
    var1,
    func
}
```

Importar módulo criado:


```
const module1 = require('./module')
```


**Módulos do Core**

```
const fs = require('fs')
```


**Módulos Terceiros**

`$ npm install uuid`

```
const uuid = require('uuid/v4')
console.log(uuid())
```

Para controlar os módulos terceiros é utilizado o arquivo _package.json_

Para criar o arquivo executar:

`$ npm init`

Os módulos terceiros serão incluídos no json package.json.

```
...
"dependencies": {
    "body-parser": "^1.18.3",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "uuid": "^3.3.2"
}
...
```