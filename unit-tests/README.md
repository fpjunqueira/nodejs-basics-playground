# Unit Testing

## Test Runner: Mocha

`
$ npm install --save-dev mocha
`

## Assertion

`
$ npm install --save-dev chai
`

## Executing Mocha

`
$ find ./ -name '*.test.js' | xargs ./node_modules/.bin/mocha --reporter spec
`

```
"scripts": {
    ...
    "test": "find ./ -name '*.test.js' | xargs ./node_modules/.bin/mocha --reporter spec"
}
```

`
$ npm test
`

## Testing Assync Codes With Stub

`
$ npm install --save-dev sinon 
`

Version with no problems:

`
$ npm install --save-dev sinon@2.4.1
`

## Code coverage

`
$ npm install --save-dev istanbul
`

```
"scripts": {
    "test": "find ./ -name '*.test.js' | xargs ./node_modules/.bin/mocha --reporter spec",
    "coverage": "find ./ -name '*.test.js' | xargs ./node_modules/.bin/istanbul cover _mocha -- --reporter spec"
}
```

` $ npm run coverage
`

Output:

```
=============================== Coverage summary ===============================
Statements   : 96.77% ( 30/31 )
Branches     : 50% ( 1/2 )
Functions    : 100% ( 0/0 )
Lines        : 96.77% ( 30/31 )
================================================================================
```

_Coverage'll generate a coverage folder with coverage.json, that can be used with CI integrations,and a html page wich is a pretty view to see the coverage per files._

`$ google-chrome coverage/lcov-report/index.html`
