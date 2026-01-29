// #1 Carregar o framework Express da pasta node_modules
const express = require("express");

// #2 Copiar o frame para uma constante "app"
const app = express();

// #4 Criar rota principal da aplicação
app.get("/", function(req, res){
    //res.send("Seja bem vindo à minha app");
    res.sendFile(__dirname + "/html/index.html");//__dirname retorna o diretório raiz da app
});

// #5.a Criar outras rotas
app.get("/sobre", function(req, res){
    //res.send("Minha página sobre");
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Meu blog");
});

// #5.b Criar rota com parâmetros (ex: /ola/dudu/designer)
app.get("/ola/:nome/:cargo", function(req, res){
    res.send(`<h1>Bem-vindo, ${req.params.cargo} ${req.params.nome}</h1>`); // "req" recebe dados de uma requisição
});

// #3 Abrir servidor com Express
app.listen(8081, function(){
    console.log("Servidor rodando na url://localhost:8081");
});