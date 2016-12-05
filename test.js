/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test  = require('tape')
const async = require('lasync')

const apply = require('./')

test('a simple example', (assert) => {
  let fn  = apply(puts, 'one')

  assert.equal(fn('two', 'three'), 'one two three')
  assert.end()
})

test('a control flow example', (assert) => {
  async.waterfall(
    [
      apply(putsAsync, 'one'),
      apply(putsAsync, 'two'),
      apply(putsAsync, 'three')
    ],
    (err, res) => {
      assert.equal(err, null)
      assert.deepEqual(res, 'one - two - three')
      assert.end()
    }
  )
})

function puts (one, two, three) {
  return `${one} ${two} ${three}`
}

function putsAsync (...args) {
  let cb = args.pop()
  cb(null, args.reverse().join(' - '))
}
