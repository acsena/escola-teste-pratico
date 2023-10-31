const mysql = require('mysql'); //chamando a dependencia do mysql

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: 'alunos',
});

module.exports = conexao; //exportar a conexao com o banco