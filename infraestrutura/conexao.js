const mysql = require('mysql'); //chamando a dependencia do mysql

const conexao = mysql.createConnection({
    host: process.env.DATABASE_URL,
    port: process.env.PORT,
    user: "root",
    password: '',
    database: 'alunos',
});

module.exports = conexao; //exportar a conexao com o banco