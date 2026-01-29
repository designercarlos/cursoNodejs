// FAZER UMA REQUISIÇÃO HTTP

// #1 Chamar o módulo http padrão do node
var http = require('http')

// #2 Iniciar um servidor http
http.createServer(function(req, res){
    res.end('Ola mundo! Bem-vindo ao meu servidor');
})
.listen(8081)// indica a porta

console.log('O servidor está rodando');