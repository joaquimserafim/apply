/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

module.exports = apply

function apply (fn, ...args) {

  return applyFn

  function applyFn (...restArgs) {
    return fn.apply(null, args.concat(restArgs))
  }
}
