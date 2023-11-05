const express = require('express'); //framework gerenciador de requisições HTTP
const app = express(); //iniciando a aplicação
const port = process.env.PORT || 3000; //numero da porta que vai rodar a aplicação
const router = require('./routers/index'); //importando o index da pasta routers
const conexao = require('./infraestrutura/conexao'); //importando o arq conexao da pasta infraestrutura
const tabelas = require('./infraestrutura/tabelas'); //importando o arq tabelas da pasta infraestrutura


router(app, express); //chamando funcao que roda as rotas no index da pasta routers (TEM Q FICAR ACIMA DA CRIACAO DE TABELAS PELA ORDEM)
tabelas.init(conexao); //criar a tabela com a conexao do banco de dados

//para rodar a aplicação
app.listen(port, (error) => { //verica se teve algum erro
    if(error) {
        console.log('Houve algum erro'); //mensagem de erro
        return; //retorna vazio para nao ter que usar else e sair do if
    }
    console.log('Aplicação rodando com sucesso na porta', port); //mensagem que a aplicação está rodando com sucesso

}); 