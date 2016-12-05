# apply

Detects and measures the latency of the NodeJS event loop

----
<a href="https://nodei.co/npm/node-apply/"><img src="https://nodei.co/npm/node-apply.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/apply)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/apply/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/apply/blob/master/package.json#L40)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api

##### apply(function_to_apply, [initial_arguments])

### examples

#### first example
```js
const apply = require('node-appy')

const foo = apply(puts, 'one')

foo('two', 'three')// will return `one two, three`

function puts (one, two, three) {
  return `${one} ${two} ${three}`
}
```


#### second example
```js
const apply = require('node-appy')
const async = require('lasync')

async.waterfall(
  [
    apply(putsAsync, 'one'),
    apply(putsAsync, 'two'),
    apply(putsAsync, 'three')
  ],
  (err, res) => {
    // res will be 'one - two - three'
  }
)

function putsAsync (...args) {
  let cb = args.pop()
  cb(null, args.reverse().join(' - '))
}
```


#### ISC License (ISC)