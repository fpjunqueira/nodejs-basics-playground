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