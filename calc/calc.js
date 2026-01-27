// #3 A variável guarda o que foi exportado no módulo
var somaFunc = require("./soma.js")
var subFunc = require("./sub.js")
var multiFunc = require("./multi.js")

console.log(somaFunc(1,2))
console.log(subFunc(10,5))
console.log(multiFunc(10,100))