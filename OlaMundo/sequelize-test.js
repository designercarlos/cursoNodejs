const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelizeTest', 'root', 'root', { //banco de dados, usuario, senha
 host: "localhost",
 port: 3306,
 dialect: "mysql"
});

// Verificar a conexão com o banco de dados
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});